import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { User } from './interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { GetUserDto } from './dto/get-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findAll(): GetUsersDto {
    return {
      count: this.users.length,
      message: this.users.length ? 'OK' : 'There are no users!',
      users: this.users,
    };
  }

  findOne(id: string): GetUserDto {
    const foundUser = this.users.find((user) => user.id === id);

    return {
      count: foundUser ? 1 : 0,
      message: foundUser ? `User found` : 'No user found!',
      user: foundUser || ({} as User),
    };
  }

  create(user: User): CreateUserDto {
    this.users.push(user);

    return {
      count: 1,
      message: 'User created!',
      user: user,
    };
  }

  update(id: string, content): UpdateUserDto {
    const result = this.users.find((user) => user.id === id);
    const resultIndex = this.users.findIndex((user) => user.id === id);

    const updatedUser = { ...result, ...content };

    this.users.splice(resultIndex, 1, updatedUser);

    return {
      count: 1,
      message: 'User updated!',
      user: updatedUser,
    };
  }

  delete(id: string): DeleteUserDto {
    const user = this.users.find((user) => user.id === id);
    const userToDeleteIndex = this.users.findIndex((user) => user.id === id);

    this.users.splice(userToDeleteIndex, 1);

    return {
      count: 1,
      message: 'User deleted!',
      user,
    };
  }
}
