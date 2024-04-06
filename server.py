from flask import *
import flask_cors
from detect_web import VideoCamera

app = Flask(__name__)
cors = flask_cors.CORS(app, resources={r"/getMsg": {"origins": "*"}})  # 解决跨域问题,vue请求数据时能用上


@app.route('/show_web')  # 现场画面
def show_web():
    return render_template('home.html')


@app.route('/')  # 网站主页（注册界面）
def homes():
    return render_template('enroll.html')  # 注册界面


@app.route('/zhuce')  # 注册界面
def zhuce():
    return render_template('enroll.html')  # 注册界面


@app.route('/usermanager')  # 用户管理界面
def usermanager():
    return render_template('user_manager.html')


@app.route('/login')  # 登录界面
def login():
    return render_template('login.html')


@app.route('/show_data')  # 数据分析界面
def show_data():
    return render_template('data.html')  # 数据分析界面


@app.route('/manager_data')  # 数据管理界面
def manager_data():
    return render_template('index.html')  # 管理数据


def gen(camera):  # 生成器，前端获取一个可迭代的对象，后端会实时将处理以后的图片传给前端
    while True:
        res = camera.get_frame()
        if res is None:
            continue
        # 使用generator函数输出视频流， 每次请求输出的content类型是image/jpeg
        frame, _, _, _ = res
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # 返回图片


@app.route('/video_feed')  # 现场画面接口
def video_feed():
    return Response(gen(VideoCamera(_camera=True)),  # 摄像头用这行代码 return Response(gen(VideoCamera(_video=True,
                    # video_path = r'C:\Users\86195\Desktop\yolov5-head-master\test.mp4')),  # 视频用这行代码

                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
