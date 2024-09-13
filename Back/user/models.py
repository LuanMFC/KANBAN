from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    DEPARTMENT_CHOICES = [
        ("TI", "Tecnologia da Informação"),
        ("ADM", "Administrativo"),
    ]
    
    position = models.CharField(max_length=255, blank=True, null=True)
    department = models.CharField(choices=DEPARTMENT_CHOICES, blank=True, null=True, max_length=50)

    def __str__(self):
        return self.username