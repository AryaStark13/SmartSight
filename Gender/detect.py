from deepface import DeepFace
import base64
from PIL import Image
import io

# try:
#   with open(r"C:\Users\ariha\Desktop\COC\EnemiesOfSyntax_AIML_01\load_model_img\load_model.jpg", "rb") as img_file:
#     my_string = base64.b64encode(img_file.read())
#   print(my_string)
#   # analysis = DeepFace.analyze(img_path = , actions = ["gender"]) #mnist image
# except ValueError:
#   pass

# my_string = my_string.replace('data:image/png;base64,', '')

with open(r"C:\Users\ariha\Desktop\COC\datasouls_antispoof\datasouls_antispoof\real_1.jpg", "rb") as img_file:
  my_string = base64.b64encode(img_file.read())

# data['image'] = data['image'].replace('data:image/png;base64,', '')
my_string = my_string.decode('utf-8')
# print(my_string)

img = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string, "utf-8"))))
img = img.convert('RGB')
img.save('./img.png')

analysis = DeepFace.analyze(img_path = './img.png', actions = ["age", "gender", "emotion", "race"]) #actual image

gender = analysis[0]['dominant_gender']

male = 'male'
female = 'female'

def gender_reveal(gender):
  if gender == 'Woman':
    return female
  if gender == 'Man':
    return male

sex = gender_reveal(gender)
age = analysis[0]['age']
emotion = analysis[0]['dominant_emotion']
race = analysis[0]['dominant_race']
