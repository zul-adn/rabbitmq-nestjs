import { Body, Controller, Post } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send-notification')
  sendNotification(@Body() notifications : NotificationDto){
    return this.notificationsService.sendNotification(notifications);
  }

}
