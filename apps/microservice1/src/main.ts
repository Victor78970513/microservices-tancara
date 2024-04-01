import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Microservice1Module } from './microservice1.module';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		Microservice1Module,
		{
			transport: Transport.TCP,
		}
	)
	await app.listen()
}
bootstrap();
