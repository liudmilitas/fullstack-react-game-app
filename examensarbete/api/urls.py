from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', views.registerUser, name='register'),
    path('stickers/', views.getStickers, name="stickers"),
    path('stickers/<str:pk>/', views.getSticker, name="sticker"),
    path('users/profile', views.getUser, name="user"),
    path('users/', views.getUsers, name="users"),
]