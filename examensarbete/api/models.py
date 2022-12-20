from django.db import models

class Sticker():

# Fields
   name = models.CharField(max_length=50)
   url = models.CharField(max_length=200)
   character = models.CharField(max_length=50)
   description = models.TextField(max_length=200, null=True, blank=True)

# Metadata

# Methods

class UserInfo():
# Fields
# user = models.OneToOneField(User, on_delete=models.CASCADE)
   region = models.CharField(max_length=50)
   

# Metadata

# Methods