# Generated by Django 2.1.7 on 2019-03-18 09:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_auto_20190316_1633'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orders',
            name='task_version',
        ),
        migrations.AddField(
            model_name='orders',
            name='version',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='orders.OnlineVersion'),
            preserve_default=False,
        ),
    ]
