from rest_framework import generics
from .serializer import StatusSerializer, PrioritySerializer
from .models import Status, Priority

# Create your views here.

class StatusCreateListView(generics.ListCreateAPIView):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
      

class StatusRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer



class PriorityCreateListView(generics.ListCreateAPIView):
    queryset = Priority.objects.all()
    serializer_class = PrioritySerializer


class PriorityRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Priority.objects.all()
    serializer_class = PrioritySerializer