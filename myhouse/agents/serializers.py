from rest_framework import serializers
from .models import Agent


class AgentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = "__all__"
