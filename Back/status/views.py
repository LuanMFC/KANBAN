from rest_framework import generics, views
from rest_framework.response import Response
from .models import Status
from .serializers import StatusSerializer
# Create your views here.
class StatusCreateView(generics.ListCreateAPIView):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer


class StatusUpdateDeleteRetrieverView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer


class StatusPerKanbanView(views.APIView):
    def get(self, request, *args, **kwargs):
        kanban_id = request.query_params.get('kanban_id')
        queryset = Status.objects.filter(kanban_id=kanban_id)
        serializer = StatusSerializer(queryset, many=True)
        return Response(serializer.data)