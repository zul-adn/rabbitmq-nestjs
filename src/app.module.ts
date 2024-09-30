import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { ConsumerModule } from './consumer/consumer.module';
import { RabbitMQService } from './config/rabbitmq.config';

@Module({
  imports: [NotificationsModule, ConsumerModule],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
})
export class AppModule {}
