from django.views import View
from django.http import HttpResponse, JsonResponse
import json
import io
import base64
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import time
from PIL import Image
import cv2
import pytesseract
import numpy as np
import re
from datetime import date

# important: set the path to your tesseract.exe file
pytesseract.pytesseract.tesseract_cmd = r"C:/Program Files/Tesseract-OCR/tesseract.exe"


@method_decorator(csrf_exempt, name='dispatch')
class GetInfo(View):
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

        img = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        th, threshed = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

        text2 = pytesseract.image_to_string(threshed, lang="eng")
        text2 = re.sub(r'[^\w\s]', '', text2)

        list1 = text2.split()
        list1

        list2 = []

        list2.append(list1[(list1.index("Name") + 1)])
        list2.append(list1[(list1.index("Name") + 2)])
        list2.append(list1[(list1.index("DOB") + 1)])
        list2.append(list1[(list1.index("Phone") + 1)])

        year = list2[2][4:]
        month = list2[2][2:4]
        day = list2[2][:2]

        year = int(year)
        month = int(month)
        day = int(day)

        def get_age(birthdate):
            today = date.today()
            age = today.year - birthdate.year - \
                ((today.month, today.day) < (birthdate.month, birthdate.day))
            return age

        age = (get_age(date(year, month, day)))

        list2[2] = age

        print(list2)
        toc = time.time()
        total_time = toc - tic
        print(total_time)
        return JsonResponse({'image': list2})
