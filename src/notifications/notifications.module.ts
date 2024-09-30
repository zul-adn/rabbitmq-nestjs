import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from 'src/config/rabbitmq.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsEntity } from './entities/notification.entity';

@Module({
  imports:[TypeOrmModule.forFeature([NotificationsEntity])],
  controllers: [NotificationsController],
  providers: [NotificationsService, RabbitMQService],
})
export class NotificationsModule {}
