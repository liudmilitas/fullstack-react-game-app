from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from api.models import Game
from api.serializers import GameSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createGame(request):
    user = request.user
    sticker = request.sticker
    data = request.data


    game = Game.objects.create(
        user=user,
        sticker=sticker
    )
    serializer = GameSerializer(game, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyGames(request):
    user = request.user
    games = user.games_set.all()
    serializer = GameSerializer(games, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getGames(request):
    games = Game.objects.all()
    serializer = GameSerializer(games, many=True)
    return Response(serializer.data)