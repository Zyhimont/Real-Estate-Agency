from django.urls import path
from .views import *

urlpatterns = [
    path('houseslist/', HousesAPIList.as_view()),
    path('houseslist/<int:pk>/', HousesAPIDetailView.as_view()),
    path('houseimages/<int:fk>/', HouseImagesAPIDetailView.as_view()),
    path('houseimages/<int:fk>/<int:pk>/', HouseImagesAPIDeleteView.as_view()),
]

