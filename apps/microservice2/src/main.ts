import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Microservice2Module } from './microservice2.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Microservice2Module,
    {
      transport: Transport.TCP
    }
  )
  await app.listen()
}
bootstrap();
