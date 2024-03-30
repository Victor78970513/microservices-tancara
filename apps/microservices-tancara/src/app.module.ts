import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Microservice2Module } from 'apps/microservice2/src/microservice2.module';

@Module({
  imports: [
    Microservice2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
