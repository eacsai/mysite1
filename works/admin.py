from django.contrib import admin
from .models import Image,ImageType

@admin.register(Image)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('img','created', 'description')


@admin.register(ImageType)
class BlogTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'type_name')
