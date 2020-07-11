from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
# from mandal import models as mandal
import time


class Hospital (models.Model):
    hospital_id = models.CharField(max_length=50, primary_key=True)
    is_mobile = models.BooleanField()
    # location = models.ForeignKey(
    #     mandal, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=10)
    capacity = models.IntegerField()
