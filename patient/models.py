from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
import time


class Patient (models.Model):
    pkid = models.CharField(max_length=32,
                            primary_key=True
                            )

    name = models.CharField(max_length=50, required=True)
    surname = models.CharField(max_length=50, required=True)
    # SonOf/DaughterOf/WifeOf
    relation = models.CharField(max_length=30, required=True)
    gaurdian_name = models.CharField(max_length=50, required=True)
    age = models.SmallIntegerField(default=0)
    # M=> Male/F=>Female/N=>NonBinary
    gender = models.CharField(default='NaN', max_length=3)
    phone = models.PhoneNumberField()
    adhaar = models.CharField(max_length=16)  # 16 digit num
    # single/married/separated/divorced/widowed
    maritalstatus = models.CharField(default=None, max_length=15)

    bloodgroup = models.CharField(default=None, max_length=4)
    PVGT = models.CharField(default=None, max_length=3)

    dateoftesting = models.DateField()
    serumCreatinine = models.DecimalField(max_digits=5, decimal_places=1)
    bloodUrea = models.DecimalField(max_digits=5, decimal_places=1)
    uricAcid = models.DecimalField(max_digits=5, decimal_places=1)
    electrolytes_sodium = models.DecimalField(max_digits=5, decimal_places=1)
    electrolytes_potassium = models.DecimalField(
        max_digits=5, decimal_places=1)
    bun = models.DecimalField(max_digits=5, decimal_places=1)

    pedalEdema = models.CharField(max_length=2)
    # if above is yes then ask single/bilateral
    pedaltype = models.CharField(max_length=50)

    # good/abnormal
    kidneystatus = models.CharField(max_length=50)
    # in case abnormal ask following
    ailments = models.TextField(max_length=100)
    dialysis = models.BooleanField()
    doctorreq = models.BooleanField()
    # if above is yes then ask refer to the following hospital
    hospitalAdmit = models.CharField(max_length=50)

    dateOfAdmit = models.DateField(auto_now=False, auto_now_add=False)
    refered = models.BooleanField()
    # case:yes
    referredto = models.CharField(max_length=50)
    status = models.TextField(max_length=300)
    treatmentDone = models.TextField(max_length=300)
    discharge = models.DateField(auto_now=False, auto_now_add=False)
    dischargeStatus = models.TextField(max_length=500)
    # case:no
    # treatmentDone
    # discharge
    # dischargeStatus
    deceased = models.BooleanField()
    # if above is answered yes
    deathDate = models.DateField(auto_now=False, auto_now_add=False)
    placeOfDeath = models.CharField(max_length=50)
    causeOfDeath = models.TextField(max_length=300)
