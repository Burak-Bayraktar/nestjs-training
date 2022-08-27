import { GetUsersDto } from './dto/get-users.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GetUserDto } from './dto/get-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('user')
export class UserController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<GetUsersDto> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GetUserDto> {
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() user: User): Promise<CreateUserDto> {
    return this.usersService.create(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: User) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteUserDto> {
    return this.usersService.delete(id);
  }
}
