import { Inject, Injectable } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
import { RabbitMQService } from 'src/config/rabbitmq.config';

@Injectable()
export class NotificationsService {

    constructor(private readonly rabbitMQService: RabbitMQService){} 

    sendNotification(notifications: NotificationDto){
        try {
            this.rabbitMQService.sendNotification(notifications);
        } catch (error) {
            console.log(error);
        }
    }
}
