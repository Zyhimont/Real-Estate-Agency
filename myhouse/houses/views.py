from rest_framework import generics, mixins, status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import House, HouseImage
from .permissions import IsStaffOrReadOnly
from .serializers import HousesSerializer, HouseImagesSerializer


class HousesAPIList(generics.ListCreateAPIView):
    queryset = House.objects.all()
    serializer_class = HousesSerializer
    permission_classes = (IsStaffOrReadOnly, )


class HousesAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = House.objects.all()
    serializer_class = HousesSerializer
    permission_classes = (IsStaffOrReadOnly,)


class HouseImagesAPIDetailView(mixins.RetrieveModelMixin, mixins.CreateModelMixin, GenericAPIView):
    queryset = HouseImage.objects.all()
    serializer_class = HouseImagesSerializer
    permission_classes = (IsStaffOrReadOnly,)

    def get(self, request, *args, **kwargs):
        images_qs = HouseImage.objects.filter(house=kwargs.get("fk"))
        images_list = []
        for image in images_qs:
            images_dict = {}
            images_dict["id"] = image.id
            images_dict["image"] = image.image
            images_dict["house"] = image.house
            images_list.append(images_dict)

        return Response(HouseImagesSerializer(images_list, many=True).data)

    def post(self, request, *args, **kwargs):
        self.create(request, *args, **kwargs)
        return Response(status=status.HTTP_201_CREATED)


class HouseImagesAPIDeleteView(mixins.DestroyModelMixin, mixins.UpdateModelMixin, GenericAPIView):
    queryset = HouseImage.objects.all()
    serializer_class = HouseImagesSerializer
    permission_classes = (IsStaffOrReadOnly,)

    def get(self, request, *args, **kwargs):
        images_qs = HouseImage.objects.filter(house=kwargs.get("fk"), id=kwargs.get("pk"))
        images_list = []
        for image in images_qs:
            images_dict = {}
            images_dict["id"] = image.id
            images_dict["image"] = image.image
            images_dict["house"] = image.house
            images_list.append(images_dict)

        return Response(HouseImagesSerializer(images_list, many=True).data)

    def delete(self, request, *args, **kwargs):
        image = self.get_object()
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
