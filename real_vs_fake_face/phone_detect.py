import torch
import base64
from PIL import Image
import io

model = torch.hub.load('ultralytics/yolov5', 'custom', path=r'C:\Users\ariha\Desktop\COC\EnemiesOfSyntax_AIML_01\real_vs_fake_face\best.pt', force_reload=True) 

imgs = [r'C:\Users\ariha\Desktop\COC\EnemiesOfSyntax_AIML_01\real_vs_fake_face\fake_1.jpeg']  # batch of images
# imgs = ['https://media.istockphoto.com/id/582288728/photo/bull-terrier-and-his-owner.jpg?s=612x612&w=0&k=20&c=BaXo0rO69yaigWXxQi6jlKnZkWqBGS0sBhAwDVMX-xw=']  # batch of images


with open(r"C:\Users\ariha\Desktop\COC\EnemiesOfSyntax_AIML_01\real_vs_anim\anim_2.jpg", "rb") as img_file:
    my_string = base64.b64encode(img_file.read())
my_string = my_string.decode('utf-8')

# add for production:
# my_string = my_string.replace('data:image/png;base64,', '')
# data['image'] = data['image'].replace('data:image/png;base64,', '')

img = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string, "utf-8"))))
img = img.convert('RGB')

results = model([img]) # pass as a list to be safe

real = None

try:
    results.xyxy[0].numpy()[0][-1]
except IndexError:
    real = False
else:
    real = True

print(real)