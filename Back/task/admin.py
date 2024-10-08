from django.contrib import admin
from .models import Task


# Register your models here.
@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'priority', 'status', 'date_created', 'expected_conclusion', 'date_completed')