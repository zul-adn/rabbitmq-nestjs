import 'dotenv/config';
import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { NotificationDto } from 'src/notifications/dto/notification.dto';

admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.PROJECT_ID,  // replace with your app project-ID
      clientEmail: process.env.CLIENT_EMAIL, //replace with your app CLIENT-KEY
      privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n")//replace with your app PRIVATE-KEy
    }),
});

@Injectable()
export class FcmNotificationService {
  constructor() {}

  async sendingNotificationOneUser(notification: NotificationDto) {
    Logger.log("FROM PUSH");
    const payload= {
        token: notification.device,
        notification: {
          title: notification.identifier,
          body: notification.text
        },
    }

    return admin.messaging().send(payload).then((res)=>{
        Logger.log(res);
        return {
            success: true
        }
      }).catch((error)=>{
       Logger.error(error)
      })
  }
}