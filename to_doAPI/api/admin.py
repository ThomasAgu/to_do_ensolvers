from django.contrib import admin

from .models import Group, Todo

# Register your models here.
admin.site.register(Todo)
admin.site.register(Group)