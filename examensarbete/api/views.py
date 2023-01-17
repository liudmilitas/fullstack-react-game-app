from django.shortcuts import render
from django.http import JsonResponse
from .stickers import stickers
from rest_framework.decorators import api_view
from rest_framework.response import Response


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
    return Response(stickers)

@api_view(['GET'])
def getSticker(request, pk):
    sticker = None
    for i in stickers:
        if i['_id'] == pk:
            sticker = i
            break
    return Response(sticker)