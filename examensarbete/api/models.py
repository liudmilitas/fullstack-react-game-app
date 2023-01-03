from django.db import models
from django.conf import settings
from datetime import datetime

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
      # >>> (sticker).character
      # 'ALBE'

      # >>> (sticker).get_character_display()
      # 'Albedo'

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
        COLLEI = 'COLL', 'Collei'
        CYNO = 'CYNO', 'Cyno'
        DILUC = 'DILU', 'Diluc'
        DIONA = 'DION', 'Diona'
        DORI = 'DORI', 'Dori'
        EULA = 'EULA', 'Eula'
        FISCHL = 'FISC', 'Fischl'
        GOROU = 'GORO', 'Gorou'
        HEIZOU = 'HEIZ', 'shikanoin-heizou'
        HUTAO = 'HUTA', 'Hu-Tao'
        ITTO = 'ITTO', 'Arataki-Itto'
        JEAN = 'JEAN', 'Jean'
        KAEYA = 'KAEY', 'Kaey'
        KAZUHA = 'KAZU', 'Kazuha'
        KEQING = 'KEQI', 'Keqing'
        KLEE = 'KLEE', 'Klee'
        KUKI = 'KUKI', 'kuki-shinobu'
        LAYLA = 'LAYL', 'Layla'
        LISA = 'LISA', 'Lisa'
        MONA = 'MONA', 'Mona'
        NAHIDA = 'NAHI', 'Nahida'
        NILOU = 'NILO', 'Nilou'
        NINGGUANG = 'NING', 'Ningguang'
        NOELLE = 'NOEL', 'Noelle'
        QIQI = 'QIQI', 'Qiqi'
        RAIDEN = 'RAID', 'Raiden'
        RAZOR = 'RAZO', 'Razor'
        ROSARIA = 'ROSA', 'Rosaria'
        SARA = 'SARA', 'Sara'
        SAYU = 'SAYU', 'Sayu'
        SHENHE = 'SHEN', 'Shenhe'
        SUCROSE = 'SUCR', 'Sucrose'
        TARTAGLIA = 'TART', 'Tartaglia'
        THOMA = 'THOM', 'Thoma'
        TIGHNARI = 'TIGH', 'Tighnari'
        VENTI = 'VENT', 'Venti'
        XIANGLING = 'XIAN', 'Xiangling'
        XIAO = 'XIAO', 'Xiao'
        XINGQIU = 'XING', 'Xingqiu'
        XINYAN = 'XINY', 'Xinyan'
        YAEMIKO = 'YAEM', 'Yae-Miko'
        YANFEI = 'YANF', 'Yan-Fei'
        YELAN = 'YELA', 'Yelan'
        YOIMIYA = 'YOIM', 'Yoimiya'
        YUNJIN = 'YUNJ', 'yun-jin'
        ZHONGLI = 'ZHON', 'zhongli'


   character = models.CharField(
          max_length=4,
          choices=Characters.choices,
          default=Characters.ALBEDO
   )

class Game(models.Model):
   player = models.ForeignKey(
      settings.AUTH_USER_MODEL, 
      on_delete=models.CASCADE
      )
   prize = models.ForeignKey(Sticker, on_delete=models.CASCADE)
   date_played = models.DateField()

class Wallet(models.Model):
   player = models.ForeignKey(
      settings.AUTH_USER_MODEL, 
      on_delete=models.CASCADE
   )
   balance = models.IntegerField()

class Transaction(models.Model):
   account = models.ForeignKey(
      Wallet, on_delete=models.CASCADE
   )
   amount = models.IntegerField()
   transaction_date = models.DateField()