from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Task
from datetime import datetime
@receiver(post_save, sender=Task)
def update_date_completed(sender, instance, created,**kwargs):
    if instance.status.name == "completed":
      Task.objects.filter(id=instance.id).update(date_completed=datetime.now())
