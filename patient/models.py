from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
import time

class Patient (models.Model):
    pkid = models.CharField(max_length=32,
    primary_key=True
    )

    name = models.CharField(max_length=50)
    age = models.SmallIntegerField(default = 0)
    gender = models.CharField(default = 'NaN' , max_length=3) # M=> Male/F=>Female/N=>NonBinary
    adhaar = models.CharField(max_length = 16) # 16 digit num
    maritalstatus = models.CharField(default = None , max_length=15)
    mandal = models.CharField(max_length=50)
    add = models.CharField(default = None , max_length=120)
    pnum = models.CharField(default = None , max_length=10)
    infected = models.BooleanField(default=False)
    bloodgroup = models.CharField(default = None , max_length=4)
    children = models.SmallIntegerField(default = None , blank = True)
    habits = JSONField()
    medicalhistory = JSONField()