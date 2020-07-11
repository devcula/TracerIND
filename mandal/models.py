from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
import time


class Mandal(models.Model):
    mandal_id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=50)
