import json
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from task.client import SendMessage
from asgiref.sync import sync_to_async

class TaskConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'task_{self.room_name}'

        # Adiciona o usuário ao grupo do canal
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        # Aceita a conexão WebSocket
        await self.accept()

    async def disconnect(self, close_code):
         # Remove o usuário do grupo do canal
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['task']

        # Envia mensagem para o grupo
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_notification',
                'type_task': text_data_json['type'],
                'message': message
            }
        )

    async def send_notification(self, event):
        # Usa await para enviar a mensagem através do WebSocket
        await self.send(
            text_data=json.dumps({
                'type': event['type_task'],
                'message': event['message']
            })
        )

        # Chamando métodos síncronos com sync_to_async, se necessário
        await self.handle_task(event['type_task'], event['message'])

    async def handle_task(self, type_task, message):
        Send_Message = SendMessage(self.send, message)
        
        if type_task == 'create_task':
            await sync_to_async(Send_Message.CreateTask)()
        elif type_task == 'update_task':
            await sync_to_async(Send_Message.UpdateTask)()
        elif type_task == 'delete_task':
            await sync_to_async(Send_Message.DeleteTask)()
        else:
            await sync_to_async(Send_Message.GetTask)()