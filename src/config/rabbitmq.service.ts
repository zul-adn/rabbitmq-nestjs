import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { NotificationDto } from 'src/notifications/dto/notification.dto';

@Injectable()
export class RabbitMQService {
  private client: ClientProxy;
  private queue = "notification.fcm";
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: this.queue,
      },
    });
  }

  async sendNotification(notification: NotificationDto) {
    try {
        await this.client.emit(this.queue, notification);
        return "Success Send Message";
    } catch (error) {
        console.log(error)
    }
  }

}