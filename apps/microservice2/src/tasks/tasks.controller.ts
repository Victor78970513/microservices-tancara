import { Body, Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(
        private tasksService: TasksService
    ){}

    @EventPattern('new_task')
    createTask(@Body() newTask: CreateTaskDto){
        return this.tasksService.createTask(newTask)
    }

    @EventPattern('get_tasks')
    getAllTasks(){
        return this.tasksService.getAllTasks()
    }

}
