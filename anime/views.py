from django.views import View
from django.http import HttpResponse, JsonResponse
import json
from PIL import Image
import io
import base64
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import time
import tensorflow as tf
import numpy as np
from PIL import Image
import base64
import io


model = tf.keras.models.load_model("anime/real_vs_anime_v3.h5")

CLASSES = {
    0: "Anime",
    1: "Real"
}


@method_decorator(csrf_exempt, name='dispatch')
class Anime(View):
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
        img = img.resize((64, 64))
        img = np.array(img)
        img = img.reshape(1, 64, 64, 3)

        yhat = model.predict(img)[0]

        pred_class = CLASSES[np.argmax(yhat)]

        toc = time.time()
        total_time = toc - tic
        print(total_time)
        return JsonResponse({'image': pred_class})
