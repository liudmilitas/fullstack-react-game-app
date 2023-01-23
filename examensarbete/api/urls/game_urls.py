from django.urls import path
from api.views import game_views as views

urlpatterns = [
    path('post/', views.createGame, name='game-create'),
    path('mygames/', views.getMyGames, name="games-get-my"),
    path('', views.getGames, name="games-get"),
]