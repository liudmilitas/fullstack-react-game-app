# Generated by Django 4.1.4 on 2023-01-23 16:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_sticker_character'),
    ]

    operations = [
        migrations.RenameField(
            model_name='game',
            old_name='prize',
            new_name='sticker',
        ),
    ]
