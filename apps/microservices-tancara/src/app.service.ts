import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject("TASKS_SERVICE") private clientTask: ClientProxy){}

  newTask(task:any){

    this.clientTask.emit('new_task',task)
    return task
  }
}
