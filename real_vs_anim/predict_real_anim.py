import tensorflow as tf
import numpy as np
from PIL import Image
import base64
import io


model = tf.keras.models.load_model("./real_vs_anime_v3.h5")

CLASSES = {
    0: "Anime",
    1: "Real"
}


with open("", "rb") as img_file:
    my_string = base64.b64encode(img_file.read())
my_string = my_string.decode('utf-8')


img = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string, "utf-8"))))
img = img.convert('RGB')
img = img.resize((64, 64))
img = np.array(img)
img = img.reshape(1, 64, 64, 3)

yhat = model.predict(img)[0]

pred_class = CLASSES[np.argmax(yhat)]
print(pred_class)
