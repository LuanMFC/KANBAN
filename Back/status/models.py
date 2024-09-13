from django.db import models

# Create your models here.
class Status(models.Model):

    STATUS_CHOICES = [
        ('not_started', 'Not Started'),  # Tarefa ainda não foi iniciada
        ('in_progress', 'In Progress'),  # Tarefa em andamento
        ('completed', 'Completed'),      # Tarefa concluída
        ('on_hold', 'On Hold'),          # Tarefa em espera ou pausada
        ('cancelled', 'Cancelled'),      # Tarefa cancelada
        ('pending_review', 'Pending Review'),  # Tarefa aguardando revisão
    ]
    name = models.CharField(max_length=20, choices=STATUS_CHOICES)
    description = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Priority(models.Model):

    PRIORITY_CHOICES = [
        ('low', 'Low'),            # Prioridade baixa
        ('medium', 'Medium'),      # Prioridade média
        ('high', 'High'),          # Prioridade alta
        ('critical', 'Critical'),  # Prioridade crítica
    ]
    
    name = models.CharField(max_length=20,choices=PRIORITY_CHOICES)
    description = models.CharField(max_length=150)

    def __str__(self):
        return self.name