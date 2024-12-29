from django.db import models

# Create your models here.
class HolidayData(models.Model):
    country = models.CharField(max_length=2)
    year = models.IntegerField()
    data = models.JSONField()
    last_updated = models.DateTimeField(auto_now=True)