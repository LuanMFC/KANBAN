from rest_framework import serializers
from .models import Status,Priority


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('__all__')


class PrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Priority
        fields = ('__all__')