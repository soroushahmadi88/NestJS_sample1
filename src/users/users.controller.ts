import {Controller, Get, Param, Req} from '@nestjs/common';
import { Request } from 'express';

/*
Using a path prefix in a @Controller() decorator allows us to easily group a set of related routes, and minimize repetitive code.
for example @Controller('users')
* */
@Controller('users')
export class UsersController {
  //The @Get() HTTP request method decorator before the findAll() method tells Nest to create a handler for a specific endpoint for HTTP requests.
  // The endpoint corresponds to the HTTP request method (GET in this case) and the route path.

  /*
  Using this built-in method, when a request handler returns a JavaScript object or array, it will automatically be serialized to JSON.
  When it returns a JavaScript primitive type (e.g., string, number, boolean), however, Nest will send just the value without attempting to serialize it.
  This makes response handling simple: just return the value, and Nest takes care of the rest.
  */
  @Get()
  findAll(@Req() request: Request) {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param() params: any) {
    console.log(params.id);
    return `This action returns a #${params.id} user`;
  }

  //a path prefix of users combined with the decorator @Get('active') would produce a route mapping for requests like GET /users/active.
  @Get('active')
  findActive() {
    return 'This action returns active users';
  }
}
