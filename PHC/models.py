from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
import time
from mandal.models import Mandal


class PHC(models.Model):
    PHC_id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=50,unique=True)
    mandal = models.ForeignKey(Mandal,on_delete=models.CASCADE)
