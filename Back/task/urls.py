from .views import TaskDeleteUpdateRetrieverView, TaskListCreateView, TaskPerPeriod, TaskPerUser
from django.urls import path

urlpatterns = [
    path('task/', TaskListCreateView.as_view(), name='task_list_create'),
    path('task/per_period/', TaskPerPeriod.as_view(), name='task_per_period'),
    path('task/per_user/', TaskPerUser.as_view(), name='task_per_user'),
    path('task/<int:pk>/', TaskDeleteUpdateRetrieverView.as_view(), name='task_delete_update_retriever'),
]
