from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Sticker

class StickerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sticker
        fields = '__all__'