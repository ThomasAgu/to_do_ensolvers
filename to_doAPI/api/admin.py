from django.contrib import admin

from .Models.Group import Group
from .Models.Todo import Todo

# Register your models here.
admin.site.register(Todo)
admin.site.register(Group)