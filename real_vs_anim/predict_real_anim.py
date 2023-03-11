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


# remove for production:
with open(r"C:\Users\ariha\Desktop\COC\EnemiesOfSyntax_AIML_01\real_vs_anim\anim_2.jpg", "rb") as img_file:
    my_string = base64.b64encode(img_file.read())
my_string = my_string.decode('utf-8')

# add for production:
# my_string = my_string.replace('data:image/png;base64,', '')
# data['image'] = data['image'].replace('data:image/png;base64,', '')

img = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string, "utf-8"))))
img = img.convert('RGB')
img = img.resize((64, 64))
img = np.array(img)
img = img.reshape(1, 64, 64, 3)

yhat = model.predict(img)[0]

# print(yhat)
pred_class = CLASSES[np.argmax(yhat)]
print(pred_class)
