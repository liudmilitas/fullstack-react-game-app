# Generated by Django 4.1.4 on 2022-12-27 10:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_sticker_character'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sticker',
            name='description',
        ),
    ]
