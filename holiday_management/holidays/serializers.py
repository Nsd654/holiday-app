from rest_framework import serializers

class HolidaySerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    date = serializers.CharField()
    type = serializers.ListField()
