from django.db import models

# Create your models here.
class Status(models.Model):
  name = models.CharField(max_length=50)
  description = models.TextField()
  color = models.CharField(max_length=10)
  date_created = models.DateTimeField()


  def __str__(self):
    return self.name