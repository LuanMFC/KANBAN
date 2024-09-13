from rest_framework import serializers
from .models import Task
from user.models import CustomUser
from user.serializers import CustomUserSerializer


class TaskSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        queryset=CustomUser.objects.all(), many=True
    )
    
    class Meta:
        model = Task
        fields = ("__all__")

class GetTaskSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(many=True, read_only=True)

    class Meta:
        model = Task
        fields = ('__all__')