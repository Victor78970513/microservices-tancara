import { NestFactory } from '@nestjs/core';
import { Microservice1Module } from './microservice1.module';

async function bootstrap() {
  const app = await NestFactory.create(Microservice1Module);
  await app.listen(3000);
}
bootstrap();
