from django.db import models
from django.contrib.auth.models import User

class Sticker(models.Model):
   name = models.CharField(max_length=50, null=True, blank=True)
   url = models.CharField(max_length=200, null=True, blank=True)

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
      # VS
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

   def __str__(self):
        return self.name

class Game(models.Model):
   user = models.ForeignKey(
      User, on_delete=models.CASCADE
      )
   prize = models.ForeignKey(Sticker, on_delete=models.CASCADE)

class Transaction(models.Model):
   user = models.ForeignKey(
      User, on_delete=models.SET_NULL, null=True
   )
   amount = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
   coins_amount = models.IntegerField(default=0, null=True, blank=True)
   transaction_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)