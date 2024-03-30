import { Module } from '@nestjs/common';
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
  controllers: [],
  providers: [],
})
export class Microservice2Module {}
