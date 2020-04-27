import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { createUniqueIdentifier } from '../helper.functions';
import { Project } from '../project/interfaces/project.interface';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('createTask')
  async create(@Body() createTaskDto: CreateTaskDto) {
    createTaskDto.id = createUniqueIdentifier();
    await this.taskService.create(createTaskDto);
  }

  @Get('getTasks/:id')
  async findAll(@Param() params): Promise<Task[]> {
    return this.taskService.findAll(params.id);
  }
}
