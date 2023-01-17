from django.shortcuts import render
from django.http import JsonResponse
from .models import Sticker
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Sticker
from .serializers import StickerSerializer


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/stickers/',
        '/api/stickers/<id>',

        '/api/stickers/create',
        '/api/stickers/delete/<id>',
        '/api/stickers/<update>/<id>',
    ]
    return Response(routes)

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