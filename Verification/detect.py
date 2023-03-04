from deepface import DeepFace

try:
  analysis = DeepFace.analyze(img_path = "EnemiesOfSyntax_AIML_01/load_model_img/load_model.jpg", actions = ["gender"]) #mnist image
except ValueError:
  pass


verification = DeepFace.verify(img1_path = r"C:\Users\ariha\Desktop\COC\datasouls_antispoof\datasouls_antispoof\real_1.jpg", img2_path = r"C:\Users\ariha\Desktop\COC\datasouls_antispoof\datasouls_antispoof\real_2.jpg")

BinaryVerification = verification['verified']
print(BinaryVerification)