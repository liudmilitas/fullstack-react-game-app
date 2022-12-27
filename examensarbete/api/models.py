from django.db import models

class Sticker(models.Model):

# Fields
   name = models.CharField(max_length=50)
   url = models.CharField(max_length=200)
   character = models.CharField(max_length=50)

   # Element type field
   class Element_types(models.TextChoices):
        PYRO = 'P', 'Pyro'
        HYDRO = 'H', 'Hydro'
        DENDRO = 'D', 'Dendro'
        ANEMO = 'A', 'Anemo'
        CRYO = 'C', 'Cryo'
        ELECTRO = 'E', 'Electro'

   element_type = models.CharField(
          max_length=1,
          choices=Element_types.choices,
          default=Element_types.PYRO 
   )

   # Character field
   class Characters(models.TextChoices):
        ALBEDO = 'ALBE', 'Albedo'
        ALOY = 'ALOY', 'Aloy'
        AMBER = 'AMBE', 'Amber'
        AYAKA = 'AYAK', 'Ayaka'
        AYATO = 'AYAT', 'Ayato'
        BARBARA = 'BARB', 'Barbara'
        BEIDOU = 'BEID', 'Beidou'
        BENNET = 'BENN', 'Bennet'
        CANDACE = 'CAND', 'Candace'
        CHILDE = 'CHIL', 'Childe'
        CHONGYUN = 'CHON', 'Chongyun'
   character = models.CharField(
          max_length=4,
          choices=Characters.choices,
          default=Characters.ALBEDO
   )

# Metadata

# Methods

class UserInfo(models.Model):
# Fields
# user = models.OneToOneField(User, on_delete=models.CASCADE)
   region = models.CharField(max_length=50)
   

# Metadata

# Methods