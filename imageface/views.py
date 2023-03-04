from rest_framework import viewsets
from django.http import HttpResponse
from .serializers import ImageSerializer
from .models import Image


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def post(self, request, *args, **kwargs):
        image = request.data['image']
        Image.objects.create(image=image)
        return HttpResponse({'message': 'Image created'}, status=200)
