# Generated by Django 2.1.7 on 2019-04-02 07:46

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('query', '0005_auto_20190402_1538'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mysqlusergroupmap',
            name='user',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
