import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { NotificationDto } from 'src/notifications/dto/notification.dto';

@Injectable()
export class MessageDoneService {
  private client: ClientProxy;
  private queue = "notification.done";
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_SERVER],
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