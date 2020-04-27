import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('test')
  async test(): Promise<string> {
    return 'Works!';
  }
}
