import { Controller, Get, Post, Body, Req, Param } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './interfaces/project.interface';
import { ProjectService } from './project.service';
import { createUniqueIdentifier } from '../helper.functions';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('createProject')
  async create(@Body() createProjectDto: CreateProjectDto) {
    createProjectDto.id = createUniqueIdentifier();
    await this.projectService.create(createProjectDto);
  }

  @Get('getProjects/:id')
  async findAll(@Param() params): Promise<Project[]> {
    return this.projectService.findAll(params.id);
  }
}
