from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('stickers/', views.getStickers, name="stickers"),
    path('stickers/<str:pk>/', views.getSticker, name="sticker"),
]