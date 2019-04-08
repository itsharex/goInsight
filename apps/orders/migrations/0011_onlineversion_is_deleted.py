# Generated by Django 2.1.7 on 2019-03-27 01:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0010_auto_20190326_1717'),
    ]

    operations = [
        migrations.AddField(
            model_name='onlineversion',
            name='is_deleted',
            field=models.CharField(choices=[('0', '未删除'), ('1', '已删除')], default='0', max_length=2, verbose_name='标记为是否删除'),
        ),
    ]
