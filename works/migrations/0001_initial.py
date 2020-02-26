# Generated by Django 2.0 on 2020-02-26 07:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='works/%Y%m%d/')),
                ('description', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ImageType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(max_length=15)),
            ],
        ),
        migrations.AddField(
            model_name='image',
            name='img_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='works.ImageType'),
        ),
    ]
