from django.urls import path
from api.views import sticker_views as views

urlpatterns = [
    path('', views.getStickers, name="stickers"),
    path('<str:pk>', views.getSticker, name="sticker"),
]