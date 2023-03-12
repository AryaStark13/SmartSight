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
#     verification = DeepFace.verify(img1_path='temp_img1.png', img2_path='temp_img2.png')
# except ValueError:
#     pass


@method_decorator(csrf_exempt, name='dispatch')
class Verify(View):
    def __init__(self):
        self.model = None
        self.did_load = False

    def get(self, request):
        return HttpResponse(self.did_load)

    def post(self, request):
        tic = time.time()
        data = json.loads(request.body)
        print(data['image1'])
        print(data['image2'])
        # data['image'] = data['image'].replace('data:image/png;base64,', '')
        data['image1'] = data['image1'].replace('data:image/jpeg;base64,', '')

        img1 = Image.open(io.BytesIO(
            base64.decodebytes(bytes(data['image1'], "utf-8"))))
        img1 = img1.convert('RGB')
        img1.save('./temp_img1.png')

        data['image2'] = data['image2'].replace('data:image/jpeg;base64,', '')

        img2 = Image.open(io.BytesIO(
            base64.decodebytes(bytes(data['image2'], "utf-8"))))
        img2 = img2.convert('RGB')
        img2.save('./temp_img2.png')
        try:
            verification = DeepFace.verify(
                img1_path='temp_img1.png', img2_path='temp_img2.png')
            BinaryVerification = verification['verified']
            print('try')
        except ValueError:
            print('except')
            BinaryVerification = False

        toc = time.time()
        total_time = toc - tic
        print(total_time)
        return JsonResponse({'image': str(BinaryVerification)})
