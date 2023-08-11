from rest_framework import generics
from .models import Agent
from .permissions import IsAdminOrReadOnly
from .serializers import AgentsSerializer


class AgentsAPIList(generics.ListCreateAPIView):
    queryset = Agent.objects.all()
    serializer_class = AgentsSerializer
    permission_classes = (IsAdminOrReadOnly, )


class AgentsAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Agent.objects.all()
    serializer_class = AgentsSerializer
    permission_classes = (IsAdminOrReadOnly,)
