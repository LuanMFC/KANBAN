from rest_framework import views, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import ResetPasswordCode
from django.core.mail import send_mail
from app.settings import EMAIL_HOST_USER
from datetime import datetime
from django.template.loader import render_to_string
from django.utils.html import strip_tags

class SendCode(views.APIView):
  def post(self, request):
    email = request.data.get('email')
    print(email)
    try:
      user = User.objects.get(email=email)
    except User.DoesNotExist:
      return Response({"error": "Usuário não encontrato"}, status=status.HTTP_404_NOT_FOUND)
    print(user)
    code = ResetPasswordCode.objects.create(user=user)

    html_message = render_to_string('email.html', {
      'code': code.code,  # O código que você gerou
      'year': datetime.now().year,  # O ano atual
    })
    plain_message = strip_tags(html_message) 

    send_mail(
      'Reset Password Code',
      plain_message,
      EMAIL_HOST_USER,
      [user.email],
      html_message=html_message,  # HTML message body
      fail_silently=False,
    )
    return Response({"message": "Código enviado para o e-mail"}, status=status.HTTP_200_OK)
  

class ResetPassword(views.APIView):
  def post(self, request):
    code = request.data.get('code')
    password = request.data.get('password')
    try:
      reset_code = ResetPasswordCode.objects.get(code=code)
    except ResetPasswordCode.DoesNotExist:
      return Response({"error": "Código inválido"}, status=status.HTTP_400_BAD_REQUEST)

    if reset_code.is_expired():
      return Response({"error": "Código expirado"}, status=status.HTTP_400_BAD_REQUEST)

    user = reset_code.user
    user.set_password(password)
    user.save()
    reset_code.delete()
    return Response({"message": "Senha resetada com sucesso"}, status=status.HTTP_200_OK)