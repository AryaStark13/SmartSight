from ultralytics import YOLO
from PIL import Image
import base64
import io

CLASSES = {
    0: 'person',
    1: 'bicycle',
    2: 'car',
    3: 'motorcycle',
    4: 'airplane',
    5: 'bus',
    6: 'train',
    7: 'truck',
    8: 'boat',
    9: 'traffic light',
    10: 'fire hydrant',
    11: 'stop sign',
    12: 'parking meter',
    13: 'bench',
    14: 'bird',
    15: 'cat',
    16: 'dog',
    17: 'horse',
    18: 'sheep',
    19: 'cow',
    20: 'elephant',
    21: 'bear',
    22: 'zebra',
    23: 'giraffe',
    24: 'backpack',
    25: 'umbrella',
    26: 'handbag',
    27: 'tie',
    28: 'suitcase',
    29: 'frisbee',
    30: 'skis',
    31: 'snowboard',
    32: 'sports ball',
    33: 'kite',
    34: 'baseball bat',
    35: 'baseball glove',
    36: 'skateboard',
    37: 'surfboard',
    38: 'tennis racket',
    39: 'bottle',
    40: 'wine glass',
    41: 'cup',
    42: 'fork',
    43: 'knife',
    44: 'spoon',
    45: 'bowl',
    46: 'banana',
    47: 'apple',
    48: 'sandwich',
    49: 'orange',
    50: 'broccoli',
    51: 'carrot',
    52: 'hot dog',
    53: 'pizza',
    54: 'donut',
    55: 'cake',
    56: 'chair',
    57: 'couch',
    58: 'potted plant',
    59: 'bed',
    60: 'dining table',
    61: 'toilet',
    62: 'tv',
    63: 'laptop',
    64: 'mouse',
    65: 'remote',
    66: 'keyboard',
    67: 'cell phone',
    68: 'microwave',
    69: 'oven',
    70: 'toaster',
    71: 'sink',
    72: 'refrigerator',
    73: 'book',
    74: 'clock',
    75: 'vase',
    76: 'scissors',
    77: 'teddy bear',
    78: 'hair drier',
    79: 'toothbrush',
    80: 'toothbrush'
}

IDS_TO_REMOVE = [
    0,
    9,
    10,
    11,
    12,
    18,
    19,
    20,
    21,
    22,
    23,
    25,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    49,
    50,
    51,
    56,
    57,
    59,
    64,
    65,
    66,
    67,
    71,
    74,
    76,
    78,
    79,
]

model = YOLO("yolov8n.pt")  # load an official model


def get_class_name(class_id):
    return CLASSES[class_id]


def load_yolo(load_yolo_img):
    load_yolo_img = Image.open("")
    _ = model.predict(load_yolo_img)


with open(r"", "rb") as img_file:
    my_string = base64.b64encode(img_file.read())
my_string = my_string.decode('utf-8')

img = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string, "utf-8"))))

results = model.predict(img)
pred_classes = [int(x) for x in list(results[0].boxes.cls.cpu().numpy())]
pred_classes = list(set(pred_classes))

for class_id in list(pred_classes):
    if class_id in IDS_TO_REMOVE:
        pred_classes.remove(class_id)

dating_attributes = [get_class_name(x) for x in pred_classes]

print(dating_attributes)
