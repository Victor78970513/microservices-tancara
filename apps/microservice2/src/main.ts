import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Microservice2Module } from './microservice2.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Microservice2Module,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3002,
      }
    }
  )
  await app.listen()
}
bootstrap();
