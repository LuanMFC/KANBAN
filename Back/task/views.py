from rest_framework import generics, views, status
from rest_framework.response import Response
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


class TaskPerPeriodOrUser(views.APIView):
    def get(self, request):
        tasks = Task.objects.all()
        date_start = request.query_params.get('date_created_start')
        date_end = request.query_params.get('date_created_end')
        user = request.query_params.get('user')
        if date_start is not None and date_end is not None and user is None:
            tasks = Task.objects.filter(date_created__range=[
                        date_start,
                        date_end
                    ])
        elif date_start is None and date_end is None and user is not None:
            tasks = Task.objects.filter(author__username=user)

        elif date_start is not None and date_end is not None and user is not None:
            tasks = Task.objects.filter(date_created__range=[
                        date_start,
                        date_end
                    ], author__username=user)

        serializer = GetTaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)