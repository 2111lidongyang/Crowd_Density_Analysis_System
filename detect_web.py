import torch
import numpy as np
from models.experimental import attempt_load
from sql.tools import create_db
from utils.augmentations import letterbox
from utils.general import non_max_suppression, scale_boxes
from utils.torch_utils import select_device
from random import randint
import cv2
from matplotlib.colors import LinearSegmentedColormap
from scipy.ndimage import gaussian_filter
from datetime import datetime


class VideoCamera(object):
    def __init__(self, video_path=None, image_path=None, _camera=False, _image=False, _video=False):
        self.heatmap_colormap = LinearSegmentedColormap.from_list('heatmap', [(0, 'blue'), (1, 'red')], N=256,
                                                                  gamma=1.0)
        self._camera = _camera
        self._image = _image
        self._video = _video
        self._video_path = video_path  # 获取视频的地址
        self.num = 0
        self.start_time = 0
        # 通过opencv获取实时视频流
        self.img_size = 640
        self.threshold = 0.4
        self.max_frame = 160
        if self._camera:  # 调用摄像头
            self.video = cv2.VideoCapture(0)
        elif self._video:
            self.video = cv2.VideoCapture(self._video_path)
        else:
            self.video = None
        self.imgpath = image_path
        self.weights = 'weights/best.pt'  # yolov5权重文件
        self.device = '0' if torch.cuda.is_available() else 'cpu'
        self.device = select_device(self.device)
        model = attempt_load(self.weights)
        model.to(self.device).eval()
        # model.half()
        model.float()
        # torch.save(model, 'test.pt')
        self.m = model
        self.names = model.module.names if hasattr(
            model, 'module') else model.names
        self.colors = [
            (randint(0, 255), randint(0, 255), randint(0, 255)) for _ in self.names
        ]

    def __del__(self):
        if self._camera:
            print('释放摄像头')
            self.video.release()
            del self
        else:
            pass

    def release_cap(self):
        # 释放摄像头
        self.__del__()

    def generate_heatmap(self, frame, pred_boxes):
        heatmap = np.zeros((56, 56), dtype=np.float32)  # 将热力图的大小调整为56x56

        for (x1, y1, x2, y2, _, conf) in pred_boxes:
            # 将目标的位置映射到56x56的热力图上
            x1_scaled = int((x1 / frame.shape[1]) * 56)
            y1_scaled = int((y1 / frame.shape[0]) * 56)
            x2_scaled = int((x2 / frame.shape[1]) * 56)
            y2_scaled = int((y2 / frame.shape[0]) * 56)
            heatmap[y1_scaled:y2_scaled, x1_scaled:x2_scaled] += 1

        heatmap = gaussian_filter(heatmap, sigma=2)

        heatmap = (heatmap - np.min(heatmap)) / (np.max(heatmap) - np.min(heatmap) + 1e-8)
        if not self._camera:
            heatmap = 1 - heatmap
        heatmap = (heatmap * 255).astype(np.uint8)

        # 调整颜色映射
        colormap = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)
        return colormap

    def combine_frames(self, frame, heatmap):
        combined_frame = cv2.addWeighted(frame, 0.7, heatmap, 0.3, 0)
        return combined_frame

    def detect(self, frame):
        ori_shape = frame.shape[:2]
        im0, img = self.preprocess(frame)  # 转到处理函数

        pred = self.m(img, augment=False)[0]  # 输入到模型
        pred = pred.float()
        pred = non_max_suppression(pred, self.threshold, 0.3)

        pred_boxes = []
        image_info = {}
        count = 0
        for det in pred:
            if det is not None and len(det):
                det[:, :4] = scale_boxes(
                    img.shape[2:], det[:, :4], im0.shape).round()

                for *x, conf, cls_id in det:
                    lbl = self.names[int(cls_id)]
                    x1, y1 = int(x[0]), int(x[1])
                    x2, y2 = int(x[2]), int(x[3])
                    pred_boxes.append(
                        (x1, y1, x2, y2, lbl, conf))
                    count += 1
                    key = '{}-{:02}'.format(lbl, count)
                    image_info[key] = ['{}×{}'.format(
                        x2 - x1, y2 - y1), np.round(float(conf), 3)]

        frame_without_bboxes = self.plot_bboxes(frame, pred_boxes, show_boxes=False)

        # Generate heatmap
        heatmap = self.generate_heatmap(frame_without_bboxes, pred_boxes)

        ret_hm, jpeg_hm = cv2.imencode('.jpg', heatmap)  # 热力图大小为56*56
        frame_with_bboxes = self.plot_bboxes(frame, pred_boxes)

        ret, jpeg = cv2.imencode('.jpg', frame_with_bboxes)
        return jpeg.tobytes(), jpeg_hm.tobytes(), ori_shape, count  # count为人数

    def get_frame_video(self):
        if self._video:
            while True:
                ret, frame = self.video.read()  # 读取视频帧
                if not ret:
                    break
                jpeg, jpeg_hm, ori_shape, _ = self.detect(frame)
                yield jpeg, jpeg_hm, ori_shape[::-1]  # 使用 yield 生成视频流

    def get_frame(self):
        if self._image:
            frame = cv2.imread(self.imgpath)
            jpeg, jpeg_hm, ori_shape, _ = self.detect(frame)
            return jpeg, jpeg_hm, ori_shape[::-1]

        if self._camera:
            while True:
                if self.num == 0:
                    self.start_time = datetime.now()
                    self.start_time = self.start_time.strftime("%H:%M:%S")
                self.num += 1
                ret, frame = self.video.read()  # 读视频
                if not ret:
                    # self.__del__()
                    break

                jpeg, jpeg_hm, ori_shape, person_count = self.detect(frame)
                if self.num == 10:

                    db, cursor = create_db(host='127.0.0.1', password='xxx', database='person',
                                           user='root', port=3306)
                    current_time = datetime.now()
                    # 格式化当前时间为 "YYYY-MM-DD HH:MM:SS" 的形式
                    stop_time = current_time.strftime("%H:%M:%S")

                    day_time = datetime.now()
                    day_time = day_time.strftime("%Y-%m-%d")

                    sql = "INSERT INTO crowd_data (person_count, start_time, stop_time, address, day) VALUES ('{}'," \
                          "'{}', " \
                          "'{}', '{}', '{}')".format(str(person_count), str(self.start_time), str(stop_time),
                                                     '本机摄像头', str(day_time))
                    try:
                        cursor.execute(sql)
                        db.commit()
                        cursor.close()
                        db.close()
                        print('上传数据成功')
                    except BaseException as e:
                        db.rollback()
                        cursor.close()
                        db.close()
                        print('error', str(e))
                        pass
                    self.num = 0
                print(self.num)
                return jpeg, jpeg_hm, ori_shape[::-1], person_count

    def preprocess(self, img):

        img0 = img.copy()
        img = letterbox(img, new_shape=self.img_size)[0]
        img = img[:, :, ::-1].transpose(2, 0, 1)
        img = np.ascontiguousarray(img)
        img = torch.from_numpy(img).to(self.device)
        # img = img.half()  # 半精度
        img = img.float()  # 半精度
        img /= 255.0  # 图像归一化
        if img.ndimension() == 3:
            img = img.unsqueeze(0)

        return img0, img

    def plot_bboxes(self, image, bboxes, line_thickness=None, show_boxes=True):
        tl = line_thickness or round(0.002 * (image.shape[0] + image.shape[1]) / 2) + 1
        for (x1, y1, x2, y2, cls_id, conf) in bboxes:
            color = self.colors[list(self.names.values()).index(cls_id)]
            c1, c2 = (x1, y1), (x2, y2)

            # Only draw boxes if show_boxes is True
            if show_boxes:
                cv2.rectangle(image, c1, c2, color, thickness=tl, lineType=cv2.LINE_AA)
                tf = max(tl - 1, 1)
                t_size = cv2.getTextSize(cls_id, 0, fontScale=tl / 3, thickness=tf)[0]
                c2 = c1[0] + t_size[0], c1[1] - t_size[1] - 3
                cv2.rectangle(image, c1, c2, color, -1, cv2.LINE_AA)
                cv2.putText(image, '{}-{:.2f} '.format(cls_id, conf), (c1[0], c1[1] - 2), 0, tl / 3,
                            [225, 255, 255], thickness=tf, lineType=cv2.LINE_AA)

        return image
