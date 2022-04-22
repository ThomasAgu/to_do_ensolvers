from django.db import models

class Todo(models.Model):
    info=models.CharField(max_length=50)
    finished=models.BooleanField(False)

