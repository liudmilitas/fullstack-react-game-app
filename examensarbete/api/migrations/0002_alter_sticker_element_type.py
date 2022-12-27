# Generated by Django 4.1.4 on 2022-12-27 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sticker',
            name='element_type',
            field=models.CharField(choices=[('P', 'Pyro'), ('H', 'Hydro'), ('D', 'Dendro'), ('A', 'Anemo'), ('C', 'Cryo'), ('E', 'Electro')], default='P', max_length=1),
        ),
    ]