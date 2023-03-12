from django.urls import path, include
from .views import *
from . import views
from knox import views as knox_views
from rest_framework import routers
router = routers.DefaultRouter(trailing_slash=False)

router.register('profile-image', views.CreatePost)
urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegistrationAPI.as_view()),
    path('login/', LoginAPI.as_view()),
    path('user/', UserAPI.as_view()),
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
]
