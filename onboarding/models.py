from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.ForeignKey(
        User, related_name='profiledetails', on_delete=models.CASCADE)
    email = models.EmailField(("Email Address"), primary_key=True)
    name = models.CharField(max_length=30)
    age = models.TextField(null=True, blank=True)
    gender = models.TextField(null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    profile_pic = models.ImageField(null=True, blank=True)
    phone = models.TextField(null=True, blank=True)
    college = models.TextField(null=True, blank=True)
    interests = models.TextField(null=True, blank=True)


class Post(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="journalist")
    source = models.TextField(null=True, blank=True)
    title = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    url = models.TextField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    Image = models.ImageField(null=True, blank=True)
