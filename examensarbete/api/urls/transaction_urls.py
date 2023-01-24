from django.urls import path
from api.views import transaction_views as views

urlpatterns = [
    path('post/', views.createTransaction, name='transaction-create'),
    path('mytransactions/', views.getMyTransactions, name="transactions-get-my"),
    path('', views.getTransactions, name="transaction-get"),
]