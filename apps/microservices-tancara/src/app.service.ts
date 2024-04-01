import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePersonalDto } from 'apps/microservice1/src/personal/dto/create-personal.dto';

@Injectable()
export class AppService {

  constructor(
    @Inject("TASKS_SERVICE") private clientTask: ClientProxy,
    @Inject("PERSONAL_SERVICE") private clientPersonal: ClientProxy,
    ){}

  // ESTO ES DEL MICROSERVICIO DE TASKS
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


  // ESTO ES DEL MICROSERVICIO DE PERSONAL
  createUser(user:CreatePersonalDto){
    this.clientPersonal.emit('create_user',user)
    return user
  }
  getPersonal(){
    // this.clientTask.emit('get_tasks','positivo')
    // return 'posi'

    const personal = this.clientTask.send('get_users','posi?').toPromise();
    return personal;
  }

}
