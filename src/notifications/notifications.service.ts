import { Inject, Injectable, Logger } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
import { RabbitMQService } from 'src/config/rabbitmq.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationsEntity } from './entities/notification.entity';
import * as firebase from 'firebase-admin';
import { FcmNotificationService } from 'src/config/firebase.provider';

@Injectable()
export class NotificationsService {

    constructor(
        private readonly rabbitMQService: RabbitMQService,  
        @InjectRepository(NotificationsEntity) private notificationRepository: Repository<NotificationsEntity>,
        private readonly pushNotificationService: FcmNotificationService){} 

    async sendNotification(notifications: NotificationDto){
        try {
            this.rabbitMQService.sendNotification(notifications);
        } catch (error) {
            Logger.error(error);
        }
    }


    async saveNotification(notification: NotificationDto){
        try {
            await this.notificationRepository.save(notification);
           const pushNotif = await this.pushNotification(notification);
        //    if(pushNotif){

        //    }
         } catch (error) {
           Logger.error(error);
         }
    }

    async pushNotification(notification:NotificationDto){
      try{
        this.pushNotificationService.sendingNotificationOneUser(notification)
      }catch(error){
        Logger.error(error)
      }
    }
}
