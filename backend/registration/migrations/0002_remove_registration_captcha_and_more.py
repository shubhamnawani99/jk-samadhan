# Generated by Django 5.1.4 on 2025-01-16 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registration',
            name='captcha',
        ),
        migrations.AlterField(
            model_name='registration',
            name='district',
            field=models.CharField(blank=True, default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='registration',
            name='middle_name',
            field=models.CharField(blank=True, default='', max_length=50),
            preserve_default=False,
        ),
    ]
