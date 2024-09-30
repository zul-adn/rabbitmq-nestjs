import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { RabbitMQService } from './config/rabbitmq.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConsumerService } from './config/consumer.service';
import { NotificationsEntity } from './notifications/entities/notification.entity';
import { NotificationsService } from './notifications/notifications.service';
import { FcmNotificationService } from './config/firebase.provider';

@Module({
  imports: [
    NotificationsModule, 
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [NotificationsEntity],
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([NotificationsEntity]),

   ],
  controllers: [AppController],
  providers: [AppService, RabbitMQService, ConsumerService, NotificationsService, FcmNotificationService], 
})
export class AppModule {
 
}
