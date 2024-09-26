from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import SendCode,ResetPassword
from django.urls import path

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/send_code/', SendCode.as_view(), name='send_code'),
    path('token/reset_password/', ResetPassword.as_view(), name='reset_password'),


]