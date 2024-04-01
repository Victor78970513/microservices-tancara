import { NestFactory } from '@nestjs/core';
import { Microservice1Module } from './microservice1.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		Microservice1Module,
		{
			transport: Transport.TCP,
			options: {
				host: 'localhost',
				port: 3003
			}
		}
	)
	await app.listen();
}
bootstrap();
