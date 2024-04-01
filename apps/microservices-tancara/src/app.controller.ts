import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePersonalDto } from 'apps/microservice1/src/personal/dto/create-personal.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ESTO ES DEL MICROSERVICIO TASKS
  @Post('/create-task')
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
    return this.appService.createUser(body)
  }

  // ESTO ES DEL MICROSERVICIO PERSONAL
  @Get('/personal')
  getPersonal(){
    return this.appService.getPersonal();
  }

  // ESTO ES DEL MICROSERVICIO PERSONAL
  @Delete('/personal/:id')
  deletePersonal(@Param('id', ParseIntPipe) id: number){
    return this.appService.deletePersonal(id);
  }


}
