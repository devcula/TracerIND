from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
import time
from PHC.models import PHC


class Village_sec(models.Model):
    villagesec_id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=50)
    PHC = models.ForeignKey(PHC, on_delete=models.CASCADE)
