import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsExampleController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  findAllWithWildcard() {
    return 'This route uses a wildcard';
  }

  @Get('redirect')
  @Redirect('http://nestjs.com', 301)
  redirectRoute() {
    return 'Redirecting...';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' }; // it will override any arguments passed to 'Redirect' decorator
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Post()
  @HttpCode(204) // we can change the response status code by adding 'HttpCode' decorator
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }
}
