import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto);
    }

    @Get()
    async findAll(){
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findOne(Number(id));
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.usersService.update(Number(id), updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        return this.usersService.delete(Number(id));
    }
}
