from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer, GetTaskSerializer

# Create your views here.
class TaskListCreateView(generics.ListCreateAPIView):
  queryset = Task.objects.all()
  
  def get_serializer_class(self):
    if self.request.method == 'POST':
      return TaskSerializer
    return GetTaskSerializer

class TaskDeleteUpdateRetrieverView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer