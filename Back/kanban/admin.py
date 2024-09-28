from django.contrib import admin
from .models import KanBan

# Register your models here.
@admin.register(KanBan)
class KanBanAdmin(admin.ModelAdmin):
    list_display = ('name', 'description',)