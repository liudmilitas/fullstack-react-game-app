from django.contrib import admin

# Register your models here.

from .models import Sticker
 
admin.site.register(Sticker)

from .models import Game
 
admin.site.register(Game)

from .models import Transaction
 
admin.site.register(Transaction)