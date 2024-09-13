from django.contrib import admin
from .models import Task

# Register your models here.
@admin.register(Task)
class Task_Admin(admin.ModelAdmin):
    list_display = ('name', 'description', 'status', 'due_date', 'priority', 'updated_at', 'created_at')
    search_fields = ('name', 'description', 'status', 'due_date', 'priority')