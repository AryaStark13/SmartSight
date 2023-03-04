from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from imageface.views import ImageViewSet

router = routers.DefaultRouter()
router.register('images', ImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('onboarding/', include('onboarding.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
