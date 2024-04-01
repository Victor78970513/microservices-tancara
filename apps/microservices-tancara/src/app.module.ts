import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "TASKS_SERVICE",
        transport: Transport.TCP,options:{
          port: 3002
        }
      },
      {
        name: "PERSONAL_SERVICE",
        transport: Transport.TCP,
        options:{
          port: 3003
        }
      }
    ])
  ,
  ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
