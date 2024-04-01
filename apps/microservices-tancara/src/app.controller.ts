import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePersonalDto } from 'apps/microservice1/src/personal/dto/create-personal.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ESTO ES DEL MICROSERVICIO TASKS
  @Post('create-task')
  newTask(@Body() body:any):string{
    return this.appService.newTask(body);
  }

  @Get('/tasks')
  getTasks(){
    return this.appService.getTasks();
  }

  // ESTO ES DEL MICROSERVICIO PERSONAL
  @Post('/create-user')
  newUser(@Body() body:CreatePersonalDto){
    return this.appService.createUser(body);
  }

  @Get('/personal')
  getPersonal(){
    return this.appService.getPersonal();
  }
}
