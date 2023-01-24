from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from api.models import Transaction
from api.serializers import TransactionSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createTransaction(request):
    user = request.user
    data = request.data
    transaction = Transaction.objects.create(
        user=user,
        amount=data['amount'],
        coins_amount=data['coins_amount'],
    )
    serializer = TransactionSerializer(transaction, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyTransactions(request):
    user = request.user
    transactions = Transaction.objects.filter(user=request.user)
    serializer = TransactionSerializer(transactions, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getTransactions(request):
    transactions = Transaction.objects.all()
    serializer = TransactionSerializer(transactions, many=True)
    return Response(serializer.data)