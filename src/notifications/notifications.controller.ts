import { Body, Controller, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationDto } from './dto/notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send-notification')
  sendNotification(@Body() notifications : NotificationDto){
    return this.notificationsService.sendNotification(notifications);
  }

}
