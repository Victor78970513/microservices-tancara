import { Module } from '@nestjs/common';
import { Microservice2Controller } from './microservice2.controller';
import { Microservice2Service } from './microservice2.service';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'tasks_db',
      entities: [Task],
      synchronize: true
    }),
    TasksModule
  ],
  controllers: [Microservice2Controller],
  providers: [Microservice2Service],
})
export class Microservice2Module {}
