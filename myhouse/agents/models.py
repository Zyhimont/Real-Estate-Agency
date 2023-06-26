from django.db import models


class Agent(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    extra_phone = models.CharField(max_length=20, blank=True, null=True, default=None)
    email = models.EmailField(blank=True, null=True, default=None)
    info = models.TextField(blank=True, null=True, default=None)

    def __str__(self):
        return self.name
