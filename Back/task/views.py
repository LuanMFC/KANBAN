from rest_framework import generics, views
from .models import Task
from .serializers import TaskSerializer, GetTaskSerializer


class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return TaskSerializer
        return GetTaskSerializer


class TaskDeleteUpdateRetrieverView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskPerPeriod(views.APIView):
    def get(self):
        tasks = Task.objects.filter(date_created__range=[
            self.request.GET('date_created_start'),
            self.request.GET('date_created_end')
        ])

        serializer = TaskSerializer(tasks, many=True)
        return serializer.data


class TaskPerUser(views.APIView):
    def get(self):
        tasks = Task.objects.filter(author=self.request.GET('user'))
        serializer = TaskSerializer(tasks, many=True)
        return serializer.data
