import sys
import time

from detect_web import VideoCamera as cap0
from test import VideoCamera as cap1
from flask import Flask, render_template, Response
import flask_cors
from multiprocessing import Process, Event

app = Flask(__name__)
cors = flask_cors.CORS(app, resources={r"/getMsg": {"origins": "*"}})


def video_detect(e: Event):
    cap = cap1(_camera=True)
    while not e.is_set():
        result = cap.get_frame()
        if result is not None:
            person_count = result
            print('当前人数{}'.format(person_count))
        else:
            continue
    cap.__del__()
    sys.exit()


@app.route('/')
def index():
    return render_template('img.html')


def gen(cap):
    while True:
        frame, _, _, _ = cap.get_frame()
        if frame is None:
            break
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


@app.route('/video_feed')
def video_feed():
    print('web端访问')
    e.set()
    time.sleep(3)
    return Response(gen(cap0(_camera=True)),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == "__main__":
    e = Event()
    p1 = Process(target=video_detect, args=(e,))
    p1.start()
    app.run(host='127.0.0.1', port=5000, debug=True)
