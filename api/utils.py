from rest_framework.response import Response
from .models import Room
from .serializers import RoomSerializer

def getRoomsList(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)
