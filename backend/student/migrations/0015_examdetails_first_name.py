# Generated by Django 4.0.1 on 2022-02-02 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0014_alter_examdetails_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='examdetails',
            name='first_name',
            field=models.CharField(default='None', max_length=30),
        ),
    ]
