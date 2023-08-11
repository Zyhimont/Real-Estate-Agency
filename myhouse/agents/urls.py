from django.urls import path
from .views import *

urlpatterns = [
    path('agentslist/', AgentsAPIList.as_view()),
    path('agentslist/<int:pk>/', AgentsAPIDetailView.as_view()),
]

