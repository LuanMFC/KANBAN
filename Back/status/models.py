from django.db import models
from kanban.models import KanBan

# Create your models here.
class Status(models.Model):
  name = models.CharField(max_length=50)
  description = models.TextField()
  color = models.CharField(max_length=10)
  date_created = models.DateTimeField()
  kanban = models.ForeignKey(KanBan, on_delete=models.PROTECT, related_name='kanban_status')

  def __str__(self):
    return self.name