from . import views
from django.urls import path

urlpatterns = [
    path('task', views.TaskListCreateView.as_view()),
    path('task/<int:pk>/', views.TaskRetrieveUpdateDestroyView.as_view()),
]
