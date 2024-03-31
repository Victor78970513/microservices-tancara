import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject("TASKS_SERVICE") private clientTask: ClientProxy){}

  newTask(task:any){
    this.clientTask.emit('new_task',task)
    return task
  }


  getTasks(){
    // this.clientTask.emit('get_tasks','positivo')
    // return 'posi'

    const tasks = this.clientTask.send('get_tasks','posi?').toPromise();
    return tasks;
  }
}
