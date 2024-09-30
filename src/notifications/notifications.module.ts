import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from 'src/config/rabbitmq.config';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, RabbitMQService],
})
export class NotificationsModule {}
