# Generated by Django 4.1.4 on 2023-01-17 19:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Sticker',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('url', models.CharField(blank=True, max_length=200, null=True)),
                ('element_type', models.CharField(choices=[('P', 'Pyro'), ('H', 'Hydro'), ('D', 'Dendro'), ('A', 'Anemo'), ('C', 'Cryo'), ('E', 'Electro'), ('G', 'Geo')], default='P', max_length=1)),
                ('character', models.CharField(choices=[('ALBE', 'Albedo'), ('ALOY', 'Aloy'), ('AMBE', 'Amber'), ('AYAK', 'Ayaka'), ('AYAT', 'Ayato'), ('BARB', 'Barbara'), ('BEID', 'Beidou'), ('BENN', 'Bennet'), ('CAND', 'Candace'), ('CHIL', 'Childe'), ('CHON', 'Chongyun'), ('COLL', 'Collei'), ('CYNO', 'Cyno'), ('DILU', 'Diluc'), ('DION', 'Diona'), ('DORI', 'Dori'), ('EULA', 'Eula'), ('FISC', 'Fischl'), ('GORO', 'Gorou'), ('HEIZ', 'shikanoin-heizou'), ('HUTA', 'Hu-Tao'), ('ITTO', 'Arataki-Itto'), ('JEAN', 'Jean'), ('KAEY', 'Kaey'), ('KAZU', 'Kazuha'), ('KEQI', 'Keqing'), ('KLEE', 'Klee'), ('KUKI', 'kuki-shinobu'), ('LAYL', 'Layla'), ('LISA', 'Lisa'), ('MONA', 'Mona'), ('NAHI', 'Nahida'), ('NILO', 'Nilou'), ('NING', 'Ningguang'), ('NOEL', 'Noelle'), ('QIQI', 'Qiqi'), ('RAID', 'Raiden'), ('RAZO', 'Razor'), ('ROSA', 'Rosaria'), ('SARA', 'Sara'), ('SAYU', 'Sayu'), ('SHEN', 'Shenhe'), ('SUCR', 'Sucrose'), ('TART', 'Tartaglia'), ('THOM', 'Thoma'), ('TIGH', 'Tighnari'), ('VENT', 'Venti'), ('XIAN', 'Xiangling'), ('XIAO', 'Xiao'), ('XING', 'Xingqiu'), ('XINY', 'Xinyan'), ('YAEM', 'Yae-Miko'), ('YANF', 'Yan-Fei'), ('YELA', 'Yelan'), ('YOIM', 'Yoimiya'), ('YUNJ', 'yun-jin'), ('ZHON', 'zhongli')], default='ALBE', max_length=4)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('amount', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('coins_amount', models.IntegerField(blank=True, default=0, null=True)),
                ('transaction_date', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('prize', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.sticker')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
