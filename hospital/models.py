from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
import time


class Hospital (models.Model):
    hospital_id = models.CharField(max_length=50, primary_key=True)
    is_mobile = models.BooleanField()
    location = models.ForeignKey(
        "app.Model", on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    phone = models.PhoneNumberField()
    capacity = models.IntegerField()
