import { UserController } from './users/user.controller';
import { AdminController } from './admin.controller';
import { CatsExampleController } from './cats.example/cats.example.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CatsExampleController,
    UserController,
    AdminController,
  ],
  providers: [AppService],
})
export class AppModule {}
