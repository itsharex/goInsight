# Generated by Django 2.2.16 on 2021-01-17 05:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('redisms', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='redisconfig',
            name='name',
        ),
    ]
