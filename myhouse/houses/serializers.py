from rest_framework import serializers
from .models import House, HouseImage


class HousesSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = House
        fields = "__all__"


class HouseImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseImage
        fields = "__all__"
