import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')  // domain is localhost:3000/users
export class UsersController {
    /*
   get /users
   get /usesrs/:id
   post /users
   patch /users/:id
   delete/users/:id
    */

   constructor(private readonly userService: UsersService){}


   @Get()
   findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
    return this.userService.findAll(role)
   }



   @Get(':id')
   findOne(@Param('id') id: string){  //dont need to write :id
    return this.userService.findOne(+id)   // + is known as unary plus and this convert string into number quickly

   }

   @Post()
   create(@Body() user:{ name:string,email:string,role:('INTERN')|'ENGINEER'|'ADMIN'}){
    return this.userService.create(user)
   }

   @Patch(':id')
   update(@Param('id') id: string , @Body() userUpdate:{ name?:string,email?:string,role?:'INTERN'|'ENGINEER'|'ADMIN'}){  //dont need to write :id
    return this.userService.update(+id,userUpdate)
   }

   @Delete(':id')
   delete(@Param('id') id: string){ 
    return this.userService.delete(+id)
   }

}


