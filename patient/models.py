import time
from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
from village.models import Village


class Patient (models.Model):
    pkid = models.CharField(max_length=32,
                            primary_key=True
                            )

    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    # SonOf/DaughterOf/WifeOf
    relation = models.CharField(max_length=30)
    gaurdian_name = models.CharField(max_length=50)
    age = models.SmallIntegerField(default=0)
    # M=> Male/F=>Female/NB=>NonBinary
    gender = models.CharField(default='NaN', max_length=3)
    phone = models.CharField(max_length = 10)
    adhaar = models.CharField(max_length=16,blank=True)  # 16 digit num
    village = models.ForeignKey(Village, on_delete=models.CASCADE)
    # single/married/separated/divorced/widowed
    maritalstatus = models.CharField(default=None, max_length=15)

    bloodgroup = models.CharField(default=None, max_length=4)
    PVGT = models.CharField(default=None, max_length=3)
    deworming = models.BooleanField(default=False)
    dateoftesting = models.CharField(blank = True, max_length=10)
    serumCreatinine = models.DecimalField(max_digits=5, decimal_places=1,blank = True)
    bloodUrea = models.DecimalField(max_digits=5, decimal_places=1,blank = True)
    uricAcid = models.DecimalField(max_digits=5, decimal_places=1,blank=True)
    electrolytes_sodium = models.DecimalField(max_digits=5, decimal_places=1,blank=True)
    electrolytes_potassium = models.DecimalField(
        max_digits=5, decimal_places=1,blank = True)
    bun = models.DecimalField(max_digits=5, decimal_places=1,blank=True)

    pedalEdema = models.CharField(max_length=2,blank = True)
    # if above is yes then ask single/bilateral
    pedaltype = models.CharField(max_length=50,blank = True)

    # good/abnormal
    kidneystatus = models.CharField(max_length=50,blank = True)
    # in case abnormal ask following
    ailments = models.TextField(max_length=100,blank=True)
    dialysis = models.BooleanField(default = False)
    doctorreq = models.BooleanField(default = False)
    # if above is yes then ask refer to the following hospital
    hospitalAdmit = models.CharField(max_length=50,blank = True)

    dateOfAdmit = models.CharField(blank = True, max_length=10) #YYYY-MM-DD
    refered = models.BooleanField(default = False)
    # case:yes
    referredto = models.CharField(max_length=50,blank = True)
    status = models.TextField(max_length=300,blank=True)
    treatmentDone = models.TextField(max_length=300,blank=True)
    discharge = models.CharField(blank = True, max_length=10)
    dischargeStatus = models.TextField(max_length=500,blank=True)
    # case:no
    # treatmentDone
    # discharge
    # dischargeStatus
    deceased = models.BooleanField(default = False)
    # if above is answered yes
    deathDate = models.CharField(blank = True, max_length=10)
    placeOfDeath = models.CharField(max_length=50,blank=True)
    causeOfDeath = models.TextField(max_length=300,blank=True)
