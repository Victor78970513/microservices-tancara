import { NestFactory } from '@nestjs/core';
import { Microservice1Module } from './microservice1.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
<<<<<<< HEAD
	const app = await NestFactory.create(Microservice1Module);
	app.enableCors();
	await app.listen(3002);
=======
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
>>>>>>> origin
}
bootstrap();
