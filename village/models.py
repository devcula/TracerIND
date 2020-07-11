from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
import time
from village_sec import models as v_s


class Village(models.Model):
    village_id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=50)
    village_sec = models.ForeignKey(v_s.Village_sec, on_delete=models.CASCADE)
