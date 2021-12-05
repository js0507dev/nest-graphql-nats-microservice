import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const _microservice = app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
