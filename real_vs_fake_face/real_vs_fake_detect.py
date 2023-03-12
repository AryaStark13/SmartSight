import tensorflow as tf
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np


model = load_model('./model.h5')

CLASSES = {
    0: 'fake',
    1: 'real'
}

img = Image.open('./real_2.jpg')
img = img.resize((96, 96))
img_arr = np.array(img)
img_arr = img_arr.reshape(1, 96, 96, 3)

preds = model.predict(img_arr)[0]

print(CLASSES[np.argmax(preds)])
