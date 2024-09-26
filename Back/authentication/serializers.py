from rest_framework import serializers


class modelSerializerEmail(serializers.Serializer):
  email = serializers.EmailField()
