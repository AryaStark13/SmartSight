from django.contrib import admin
from django.urls import path, include
from imageface.views import GetImage
from yolo.views import GetInterests
from ocr.views import GetInfo
from similar.views import Verify
from anime.views import Anime


urlpatterns = [
    path('admin/', admin.site.urls),
    path('onboarding/', include('onboarding.urls')),
    path("api/", GetImage.as_view(), name='get_image'),
    path("yolo/", GetInterests.as_view(), name='get_interests'),
    path("ocr/", GetInfo.as_view(), name='get_info'),
    path("similar/", Verify.as_view(), name='verify'),
    path("anime/", Anime.as_view(), name='anime'),
]
