from . import views
from django.urls import path

urlpatterns = [
    path('status', views.StatusCreateListView.as_view()),
    path('status/<int:pk>/', views.StatusRetrieveUpdateDestroyView.as_view()),
    path('priority', views.PriorityCreateListView.as_view()),
    path('priority/<int:pk>', views.PriorityRetrieveUpdateDestroyView.as_view()),
]
