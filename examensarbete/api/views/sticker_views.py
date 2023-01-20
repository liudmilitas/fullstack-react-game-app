from rest_framework.decorators import api_view
from api.models import Sticker
from rest_framework.response import Response
from api.serializers import StickerSerializer

# Sticker views

## get all

@api_view(['GET'])
def getStickers(request):
    stickers = Sticker.objects.all()
    serializer = StickerSerializer(stickers, many=True)
    return Response(serializer.data)

## get one

@api_view(['GET'])
def getSticker(request, pk):
    sticker = Sticker.objects.get(_id=pk)
    serializer = StickerSerializer(sticker, many=False)
    return Response(serializer.data)