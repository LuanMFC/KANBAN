from .views import StatusCreateView, StatusPerKanbanView, StatusUpdateDeleteRetrieverView 
from django.urls import path

urlpatterns = [
    path('status/', StatusCreateView.as_view(), name='status_list_create'),
    path('status/<int:pk>/', StatusUpdateDeleteRetrieverView.as_view(), name='status_delete_update_retriever'),
    path('status/kanban/', StatusPerKanbanView.as_view(), name='status_per_kanban'),
]
