from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
import time


class Doctor(models.Model):
    doc_id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    bloodgroup = models.CharField(max_length=3)
