import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotificationDto } from './notifications/dto/notification.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern("notification.queue")
  handleSendNotifications(@Payload() data: NotificationDto){
    console.log("TES");
    // return this.appService.sendNotification(data);
  }
}
