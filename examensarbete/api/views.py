from django.shortcuts import render
from django.http import JsonResponse
from .models import Sticker
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Sticker, User
from .serializers import StickerSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password

# Sticker views

@api_view(['GET'])
def getStickers(request):
    stickers = Sticker.objects.all()
    serializer = StickerSerializer(stickers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSticker(request, pk):
    sticker = Sticker.objects.get(_id=pk)
    serializer = StickerSerializer(sticker, many=False)
    return Response(serializer.data)

# User views

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUser(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    user = User.objects.create(
        first_name=['name'],
        username=['email'],
        email=['email'],
        password=make_password(data['password'])
        )
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)