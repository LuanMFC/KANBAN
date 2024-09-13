from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSerializer, GetTaskSerializer
from django.core.mail import send_mail
# Create your views here.

class TaskListCreateView(generics.ListCreateAPIView):
    """
    List all tasks or create a new task.
    """
    permission_classes = [IsAuthenticated,]
    queryset = Task.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return TaskSerializer
        return GetTaskSerializer
    
    def perform_create(self, serializer):
        task = serializer.save()
        
    
        if (task.user.all().exists() and self.request.user.is_superuser):
            return
        task.user.add(self.request.user)
        if(task.status.name == "completed"):
            send_email
            send_creation_notification(f'Nova instância criada: Teste')
            return 
        
            
        
    


class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    """
    List all tasks or create a new task.
    """
    permission_classes = [IsAuthenticated,]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_update(self, serializer):
        task = serializer.save()
        if(task.status.name == "completed"):
            Send_email
            return