from .views import TaskDeleteUpdateRetrieverView, TaskListCreateView, TaskPerPeriodOrUser
from django.urls import path

urlpatterns = [
    path('task/', TaskListCreateView.as_view(), name='task_list_create'),
    path('task/<int:pk>/', TaskDeleteUpdateRetrieverView.as_view(), name='task_delete_update_retriever'),
    path('task/per_period/', TaskPerPeriodOrUser.as_view(), name='task_per_period'),
]
