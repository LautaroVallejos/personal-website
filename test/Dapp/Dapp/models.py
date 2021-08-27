from django.db import models

class Planets(models.Model):
    id = models.PrimaryKey()
    name = models.CharField(max_length=50)
    house = models.IntegerField()
