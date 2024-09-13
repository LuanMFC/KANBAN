import json
from django.conf import settings
from task.models import Task
from task.serializers import TaskSerializer, GetTaskSerializer
from django.core.mail import send_mail
import requests


class SendMessage:

    def __init__(self, send_function, text_data_json):
        self.SendEmail = settings.EMAIL_HOST_USER
        self.TitleTasks = f"Atualização de Demanda - {text_data_json['name']}"
        self.DescriptionTasks = f"A demanda '{text_data_json['name']}' foi concluída... Descrição da demanda: {text_data_json['description']}."
        self.send_function = send_function
        self.data_json = text_data_json

    def ModelMessageEmail(self):
        return send_mail(
            self.TitleTasks,
            self.DescriptionTasks,
            self.SendEmail,
            [self.ReceiveEmail],
            fail_silently=False,
        )
    
    def SendMessageWhats(self):
        try:
            response = requestsssss

            self.ModelMessageEmail()            
            return "ok" if "Message queued" in response.text else "erro"
        except requests.exceptions.RequestException as e:
            return str(e)
    
    def ModelReturnMessageSuccess(self, title_action,  serialized_message, status):
        return self.send_function(
            text_data=json.dumps({
                "type": title_action,
                "task": serialized_message,
                "message": status if status else "ok"
            })
        )
    
    def ModelReturnMessageFailed(self, serialized_message):
        return self.send_function(
            text_data=json.dumps({
                'type': 'error',
                'errors': serialized_message
            })
        )
    
    def ModelMessageNotFound(self):
        return self.send_function(
            text_data=json.dumps({
                'type': 'error',
                'message': f'Task with id {self.data_json["task"]["id"]} does not exist.'
            })
        )
    
    def GetTask(self):
        serializer = GetTaskSerializer(Task.objects.all(), many=True)

        # Enviar as tasks serializadas de volta ao cliente
        return self.ModelReturnMessageSuccess("task_Views", serializer.data, None)

    
    def CreateTask(self):
        serializer = TaskSerializer(data=self.data_json)

        if serializer.is_valid():
            serializer.save()
            if (self.data_json['status'] == 23):
                status = self.SendMessageWhats()
            else:
                status = 'ok'
                
            self.ModelReturnMessageSuccess("task_created", serializer.data, status)

        else:
            # Enviar erros de validação
            self.ModelReturnMessageFailed(serializer.errors)

    def UpdateTask(self):

        try:
            task = Task.objects.get(pk=self.data_json['id'])

        except Task.DoesNotExist:
            self.ModelMessageNotFound()
            return
        
        serializer = TaskSerializer(task, data=self.data_json, partial=True)

        if serializer.is_valid():
            serializer.save()
            if (self.data_json['status'] == 23):
                self.SendMessageWhats()
            self.ModelReturnMessageSuccess("task_updated", serializer.data, None)

        else:
            # Enviar erros de validação
            self.ModelReturnMessageFailed(serializer.errors)

    def DeleteTask(self):
        try:
            Task.objects.get(pk=self.data_json['id']).delete()
            serializer = TaskSerializer(data = self.data_json)
            self.ModelReturnMessageSuccess("task_deleted", serializer.data, None)

        except Task.DoesNotExist:
            self.ModelMessageNotFound()
            return