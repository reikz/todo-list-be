
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './interfaces/project.interface';

@Injectable()
export class ProjectService {
  constructor(@InjectModel('Project') private readonly projectModel: Model<Project>) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProj = new this.projectModel(createProjectDto);
    return createdProj.save();
  }

  async findAll(userId: string): Promise<Project[]> {
    return this.projectModel.find( { userId: { $eq: userId} } ).exec();
  }
}
