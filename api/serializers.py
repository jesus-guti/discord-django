from attr import field
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Room
from .models import Topic


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["username", "email"]


class RoomSerializer(serializers.ModelSerializer):
    topic = TopicSerializer()
    host = UserSerializer()

    class Meta:
        model = Room
        fields = ['id', 'name', 'topic', 'host', 'description']

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
