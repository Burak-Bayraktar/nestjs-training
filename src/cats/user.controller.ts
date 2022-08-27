import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll(@Query() query) {
    return `FindAll ${query}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `FindOne ${id}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return `Create ${createUserDto.age}`;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return `UpdateUser ${id} ${updateUserDto}`;
  }

  @Delete('id')
  remove(@Param() params) {
    return `Delete ${params.id}`;
  }
}
