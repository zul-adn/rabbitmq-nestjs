import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsumerService } from './config/consumer.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Push Notification')
  .setDescription(
    'The API details of the business solution for the Push Notification Demo Application.',
  )
  .setVersion('1.0')
  .addTag('Notification')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
