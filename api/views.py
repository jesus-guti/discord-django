from django.http import response
from django.shortcuts import render
from .serializers import RoomSerializer
from .models import Room
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .utils import getRoomsList
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/room/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of rooms'
        }
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
def getRooms(request):
    
    if request.method == 'GET':
        return getRoomsList(request)


class RoomDetail(APIView):
    """
    Retrieve, update or delete a room instance.
    """
    def get_object(self, pk):
        try:
            return Room.objects.get(pk=pk)
        except Room.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        room = self.get_object(pk)
        serializer = RoomSerializer(room)
        return Response(serializer.data)