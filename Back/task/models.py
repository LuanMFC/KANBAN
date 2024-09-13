from django.db import models
from status.models import Status, Priority
from user.models import CustomUser

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    status = models.ForeignKey(Status, on_delete=models.CASCADE, related_name='tasks')
    due_date = models.DateField(blank=True, null=True)
    user = models.ManyToManyField(CustomUser, related_name='tasks')
    priority = models.ForeignKey(Priority, on_delete=models.CASCADE, related_name='tasks')
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name