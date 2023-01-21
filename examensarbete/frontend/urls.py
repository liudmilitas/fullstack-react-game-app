from django.urls import path
from frontend.views import index

urlpatterns = [
    path('', index, name="index"),
    path('shop', index),
    path('gallery', index),
    path('login', index),
    path('register', index),
    path('transactions', index),
]
