from .models import Task
from rest_framework import serializers
from status.serializers import StatusSerializer
from priority.serializers import PrioritySerializer


class GetTaskSerializer(serializers.ModelSerializer):
  status = StatusSerializer(read_only=True)
  priority = PrioritySerializer(read_only=True)
  class Meta:
    model = Task
    fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task
    fields = '__all__'