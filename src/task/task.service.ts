import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async create(createTasktDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTasktDto);
    return createdTask.save();
  }

  async findAll(projectId: string): Promise<Task[]> {
    return this.taskModel.find( { projectId: { $eq: projectId} } ).exec();
  }
}
