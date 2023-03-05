from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from imageface.views import GetImage
from yolo.views import GetInterests
from ocr.views import GetInfo
from similar.views import Verify

urlpatterns = [
    path('admin/', admin.site.urls),
    path('onboarding/', include('onboarding.urls')),
    path("api/", GetImage.as_view(), name='get_image'),
    path("yolo/", GetInterests.as_view(), name='get_interests'),
    path("ocr/", GetInfo.as_view(), name='get_info'),
    path("similar/", Verify.as_view(), name='verify'),
]
