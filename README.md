# 人群密度检测系统

## 工作量
我们小组从github上下载了yolov5的源代码，在此基础上修改和训练模型，
数据集选用的是crowdhuman数据集。

我们对yolov5源码中的common.py、yolo.py、loss.py、general.py
等进行了修改，更换了主干网络、改进了损失函数。

系统的前后端代码则体现在sever.py、detect_web.py,主要基于Flask实现。


## 介绍  
基于改进后的YOLOv5目标检测模型，实现人群密度检测系统。
改进的YOLOv5模型主要是用FasterNet主干网络更换了原YOLOv5的主干网络，
并应用Soft-NMS、最优运输分配（OTA）等方法改进了损失函数。

### 网页端部署
目前实现了基于Flask在网页端部署原YOLOv5模型，并调用电脑摄像头进行实时检测，
服务器端代码见sever.py，前端代码见templates，后端代码见detect_web.py。
下图代码为基于Flask实现的服务器端代码。

###  系统实现
我们小组实现了系统原型设计中视频检测、摄像头检测的核心功能,
包括实时监控、人流密度过高提醒、人流数据的增删改查、系统用户权限设置等功能。
（web前后端代码体现在sever.py、detect_web.py，主要基于Flask实现）
![人群密度分析数据统计](https://github.com/2111lidongyang/Crowd_Density_Analysis_System/blob/main/img/img.png)
