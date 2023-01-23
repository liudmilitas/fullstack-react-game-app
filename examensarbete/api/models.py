from django.db import models
from django.contrib.auth.models import User

class Sticker(models.Model):
   _id = models.AutoField(primary_key=True, editable=False)
   name = models.CharField(max_length=50, null=True, blank=True)
   url = models.CharField(max_length=200, null=True, blank=True)

   # Element type field
   class Element_types(models.TextChoices):
        PYRO = 'Pyro'
        HYDRO = 'Hydro'
        DENDRO = 'Dendro'
        ANEMO = 'Anemo'
        CRYO = 'Cryo'
        ELECTRO = 'Electro'
        GEO = 'Geo'

   element_type = models.CharField(
          max_length=10,
          choices=Element_types.choices,
          default=Element_types.PYRO 
   )

   # Character field
   class Characters(models.TextChoices):
      # >>> (sticker).character
      # 'ALBE'
      # VS
      # >>> (sticker).get_character_display()
      # 'Albedo'

        ALBEDO = 'Albedo'
        ALOY = 'Aloy'
        AMBER = 'Amber'
        AYAKA = 'Ayaka'
        AYATO = 'Ayato'
        BARBARA = 'Barbara'
        BEIDOU = 'Beidou'
        BENNET = 'Bennet'
        CANDACE = 'Candace'
        CHILDE = 'Childe'
        CHONGYUN = 'Chongyun'
        COLLEI = 'Collei'
        CYNO = 'Cyno'
        DILUC = 'Diluc'
        DIONA = 'Diona'
        DORI = 'Dori'
        EULA = 'Eula'
        FISCHL = 'Fischl'
        GOROU = 'Gorou'
        HEIZOU = 'shikanoin-heizou'
        HUTAO = 'Hu-Tao'
        ITTO = 'Arataki-Itto'
        JEAN = 'Jean'
        KAEYA = 'Kaeya'
        KAZUHA = 'Kazuha'
        KEQING = 'Keqing'
        KLEE = 'Klee'
        KUKI = 'kuki-shinobu'
        LAYLA = 'Layla'
        LISA = 'Lisa'
        MONA = 'Mona'
        NAHIDA = 'Nahida'
        NILOU = 'Nilou'
        NINGGUANG = 'Ningguang'
        NOELLE = 'Noelle'
        QIQI = 'Qiqi'
        RAIDEN = 'Raiden'
        RAZOR = 'Razor'
        ROSARIA = 'Rosaria'
        SARA = 'Sara'
        SAYU = 'Sayu'
        SHENHE = 'Shenhe'
        SUCROSE = 'Sucrose'
        TARTAGLIA = 'Tartaglia'
        THOMA = 'Thoma'
        TIGHNARI = 'Tighnari'
        VENTI = 'Venti'
        XIANGLING = 'Xiangling'
        XIAO = 'Xiao'
        XINGQIU = 'Xingqiu'
        XINYAN = 'Xinyan'
        YAEMIKO = 'Yae-Miko'
        YANFEI = 'yanfei'
        YELAN = 'Yelan'
        YOIMIYA = 'Yoimiya'
        YUNJIN = 'yun-jin'
        ZHONGLI = 'zhongli'

   character = models.CharField(
          max_length=20,
          choices=Characters.choices,
          default=Characters.ALBEDO
   )

   def __str__(self):
        return str(self.name)

class Game(models.Model):
   _id = models.AutoField(primary_key=True, editable=False)
   user = models.ForeignKey(
      User, on_delete=models.CASCADE
      )
   sticker = models.ForeignKey(Sticker, on_delete=models.SET_NULL, null=True)
   def __str__(self):
        return str(self._id)


class Transaction(models.Model):
   _id = models.AutoField(primary_key=True, editable=False)
   user = models.ForeignKey(
      User, on_delete=models.SET_NULL, null=True
   )
   amount = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
   coins_amount = models.IntegerField(default=0, null=True, blank=True)
   transaction_date = models.DateTimeField(auto_now_add=True)

   def __str__(self):
     return str(self.transaction_date)