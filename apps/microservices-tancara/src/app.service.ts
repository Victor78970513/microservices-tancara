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
  async getTasks(){
    // const tasks = this.clientTask.send('get_tasks','posi?');
    // return tasks;
    try {
      const tasks=await this.clientTask.send('get_tasks','traer datos').toPromise();
      return tasks;
    } catch (error) {
      console.log('Error fetching tasks: ',error);
      throw error;
    }
  }


  // ESTO ES DEL MICROSERVICIO DE PERSONAL
  createUser(user:CreatePersonalDto){
    try { 
      this.clientPersonal.emit('create_user',user)
      return user
    } catch (error) {
      console.log('Error fetching tasks: ',error);
      throw error;
    }
  }

  async getPersonal(){
  // this.clientTask.emit('get_tasks','positivo')
  // return 'posi'

  const personal = await this.clientPersonal.send('get_users','posi?').toPromise();
  return personal;
  }

  async deletePersonal(id: number){
  // this.clientTask.emit('get_tasks','positivo')
  // return 'posi'

  const personal = await this.clientPersonal.send('delete_user', id).toPromise();
  return personal;
  }

}
