from django.db import models
from status.models import Status
from priority.models import Priority
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
  title = models.CharField(max_length=50)
  description = models.TextField()
  priority = models.ForeignKey(Status, on_delete=models.PROTECT, related_name='task_status')
  status = models.ForeignKey(Priority, on_delete=models.PROTECT, related_name='task_priority')
  author = models.ManyToManyField(User, related_name='task_author')
  date_created = models.DateTimeField()
  expected_conclusion = models.DateField()
  date_completed = models.DateTimeField()


  def __str__(self):
    return self.title