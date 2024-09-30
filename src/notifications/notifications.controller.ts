import { Body, Controller, Post } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
import { RabbitMQService } from 'src/config/rabbitmq.config';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: RabbitMQService) {}

  @Post('send-notification')
  sendNotification(@Body() notifications : NotificationDto){
    return this.notificationsService.sendNotification(notifications);
  }

}
