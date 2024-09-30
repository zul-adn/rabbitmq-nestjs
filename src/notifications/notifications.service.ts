import { Inject, Injectable, Logger } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
import { RabbitMQService } from 'src/config/rabbitmq.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationsEntity } from './entities/notification.entity';

@Injectable()
export class NotificationsService {

    constructor(private readonly rabbitMQService: RabbitMQService,  @InjectRepository(NotificationsEntity) private notificationRepository: Repository<NotificationsEntity>, ){} 

    async sendNotification(notifications: NotificationDto){
        try {
            this.rabbitMQService.sendNotification(notifications);
        } catch (error) {
            console.log(error);
        }
    }


    async saveNotification(notification: NotificationDto){
        try {
            await this.notificationRepository.save(notification);
            // Send to firebase
            
         } catch (error) {
           // log error
           console.log(error)
         }
    }
}
