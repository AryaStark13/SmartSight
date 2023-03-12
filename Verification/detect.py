from deepface import DeepFace
import base64
from PIL import Image
import io

# try:
#     analysis = DeepFace.analyze(
#         img_path="", actions=["gender"])  # mnist image
# except ValueError:
#     pass

with open("", "rb") as img_file_1:
    my_string_1 = base64.b64encode(img_file_1.read())
my_string_1 = my_string_1.decode('utf-8')

img_1 = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string_1, "utf-8"))))
img_1 = img_1.convert('RGB')
img_1.save('./img_1.png')


with open("", "rb") as img_file_2:
    my_string_2 = base64.b64encode(img_file_2.read())
my_string_2 = my_string_2.decode('utf-8')

img_2 = Image.open(io.BytesIO(base64.decodebytes(bytes(my_string_2, "utf-8"))))
img_2 = img_2.convert('RGB')
img_2.save('./img_2.png')

verification = DeepFace.verify(
    img1_path='./img_1.png', img2_path='./img_2.png')

BinaryVerification = verification['verified']
print(BinaryVerification)
