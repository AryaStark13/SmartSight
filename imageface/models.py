from django.db import models


def upload_path(instance, filname):
    return '/'.join(['images', filname])


class Image(models.Model):
    image = models.ImageField(blank=True, null=True, upload_to=upload_path)
