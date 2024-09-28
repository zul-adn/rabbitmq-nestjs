import { Inject, Injectable } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class NotificationsService {

    constructor(@Inject("NOTIFICATION_SERVICE") private rabbitClient: ClientProxy){} 

    sendNotification(notifications: NotificationDto){
        try {
            this.rabbitClient.emit('notification.queue', notifications);
            return "Success Send Message";
        } catch (error) {
            console.log(error);
        }
    }
}
