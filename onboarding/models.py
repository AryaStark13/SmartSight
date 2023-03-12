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
