from django.views import View
from django.http import HttpResponse, JsonResponse
import json
from PIL import Image
import io
import base64
from deepface import DeepFace
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import time

# try:
#     # with open(r'E:\Coding\COC\backend\media\images\logo-no-bg.png', "rb") as img_file:
#     #     my_string = base64.b64encode(img_file.read())
#     # # image = open(r'E:\Coding\COC\backend\media\images\logo-no-bg.png', 'rb')
#     # # image_read = image.read()
#     analysis = DeepFace.analyze(
#         img_path=r"E:\Coding\COC\backend\load_model.jpg", actions=["gender"])
# except ValueError as e:
#     print(e)
#     pass


@method_decorator(csrf_exempt, name='dispatch')
class GetImage(View):
    def __init__(self):
        self.model = None
        self.did_load = False

    def get(self, request):
        return HttpResponse(self.did_load)

    def post(self, request):
        tic = time.time()
        data = json.loads(request.body)
        print(data['image'])
        # data['image'] = data['image'].replace('data:image/png;base64,', '')
        data['image'] = data['image'].replace('data:image/jpeg;base64,', '')

        img = Image.open(io.BytesIO(
            base64.decodebytes(bytes(data['image'], "utf-8"))))
        img = img.convert('RGB')
        img.save('./temp_img.png')

        try:
            analysis = DeepFace.analyze(img_path="temp_img.png", actions=[
                                        "gender"])
            gender = analysis[0]['dominant_gender']

            male = 'male'
            female = 'female'

            def gender_reveal(gender):
                if gender == 'Woman':
                    return female
                if gender == 'Man':
                    return male

            sex = gender_reveal(gender)
        except ValueError as e:
            print(e)
            sex = "chakka"
            print("ERROR HAI LAVDE")

        print(sex)
        toc = time.time()
        total_time = toc - tic
        print(total_time)
        return JsonResponse({'image': sex})
