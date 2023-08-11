from django.db import models
from django.contrib.auth.models import User
from agents.models import Agent


class PropertyType(models.Model):
    type = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Property type'

    def __str__(self):
        return self.type


class House(models.Model):
    title = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    construction_year = models.IntegerField(blank=True, null=True)
    property_type = models.ForeignKey(PropertyType, blank=True, null=True, on_delete=models.SET_NULL)
    price_per_meter = models.DecimalField(max_digits=12, decimal_places=0, blank=True, null=True)
    publish_date = models.DateTimeField(auto_now_add=True)
    area = models.DecimalField(max_digits=8, decimal_places=1)
    cost = models.DecimalField(max_digits=12, decimal_places=2)

    contact = models.ForeignKey(Agent, null=True, on_delete=models.SET_NULL)
    contact_phone = models.CharField(max_length=20, blank=True, null=True)
    contact_extra_phone = models.CharField(max_length=20, blank=True, null=True, default=None)
    contact_email = models.EmailField(blank=True, null=True, default=None)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.contact_phone = self.contact.phone
        self.contact_extra_phone = self.contact.extra_phone
        self.contact_email = self.contact.email
        self.price_per_meter = float(self.cost) / float(self.area)

        super(House, self).save(*args, **kwargs)


class HouseImage(models.Model):
    image = models.ImageField(upload_to='houses_images/')
    house = models.ForeignKey(House, blank=True, null=True, default=None, on_delete=models.CASCADE)

    def __str__(self):
        return "%s" % self.id

    class Meta:
        verbose_name = 'Image'
