from deepface import DeepFace
import base64
from PIL import Image
import io

try:
  analysis = DeepFace.analyze(img_path = "EnemiesOfSyntax_AIML_01/load_model_img/load_model.jpg", actions = ["gender"]) #mnist image
except ValueError:
  pass

with open(r"C:\Users\ariha\Desktop\COC\datasouls_antispoof\datasouls_antispoof\real_1.jpg", "rb") as img_file_1:
    my_string_1 = base64.b64encode(img_file_1.read())
# data['image'] = data['image'].replace('data:image/png;base64,', '')
my_string_1 = my_string_1.decode('utf-8')

img_1 = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string_1, "utf-8"))))
img_1 = img_1.convert('RGB')
img_1.save('./img_1.png')


with open(r"C:\Users\ariha\Desktop\COC\datasouls_antispoof\datasouls_antispoof\real_2.jpg", "rb") as img_file_2:
    my_string_2 = base64.b64encode(img_file_2.read())
# data['image'] = data['image'].replace('data:image/png;base64,', '')
my_string_2 = my_string_2.decode('utf-8')

img_2 = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string_2, "utf-8"))))
img_2 = img_2.convert('RGB')
img_2.save('./img_2.png')

verification = DeepFace.verify(img1_path = './img_1.png', img2_path = './img_2.png')

BinaryVerification = verification['verified']
print(BinaryVerification)