import { NestFactory } from '@nestjs/core';
import { Microservice2Module } from './microservice2.module';

async function bootstrap() {
  const app = await NestFactory.create(Microservice2Module);
  await app.listen(3000);
}
bootstrap();
