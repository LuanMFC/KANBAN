from django.db import models
from django.contrib.auth.models import User
import uuid
from django.utils import timezone
from datetime import timedelta

class ResetPasswordCode(models.Model):
  user = models.ForeignKey(User, on_delete=models.PROTECT,related_name='reset_password')
  code = models.UUIDField(default=uuid.uuid4, unique=True)
  created_at = models.DateTimeField(auto_now_add=True)
  activated = models.BooleanField(default=False)

  class Meta:
    ordering = ['-created_at']

  def is_expired(self):
    return self.created_at < timezone.now() - timedelta(minutes=5)
  
  def __str__(self):
    return self.name