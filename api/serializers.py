from rest_framework import serializers
from .models import Room
from .models import Topic

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    topic = TopicSerializer(required=False)

    class Meta:
        model = Room
        fields = ['id', 'name', 'topic', 'host', 'description']
        depth = 1

    """ def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['topic'] = {
            "id": instance.topic.id,
            "name": instance.topic.name
        }
        representation['host'] = {
            "id": instance.host.id,
            "username": instance.host.username
        }
        return representation """

