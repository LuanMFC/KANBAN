from django.contrib import admin
from .models import Status, Priority

# Register your models here.
@admin.register(Status)
class Status_Admin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)


@admin.register(Priority)
class Priority_Admin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)