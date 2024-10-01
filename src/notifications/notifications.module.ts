import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from 'src/config/rabbitmq.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsEntity } from './entities/notification.entity';
import { FcmNotificationService } from 'src/config/firebase.provider';
import { MessageDoneService } from 'src/config/message-done.service';
// import { FirebaseAdminProvider } from 'src/config/firebase.provider';

@Module({
  imports:[TypeOrmModule.forFeature([NotificationsEntity])],
  controllers: [NotificationsController],
  providers: [NotificationsService, RabbitMQService, FcmNotificationService, MessageDoneService],
})
export class NotificationsModule {}
