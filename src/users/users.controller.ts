import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

import { User } from '@prisma/client';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Post()
    @ApiOperation({summary: 'Criar um novo usuário'})
    async create(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto);
    }

    @Get()
    @ApiOperation({summary: 'Listar todos osusuários'})
    async findAll(){
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: "Obter um usuário pelo ID"})
    @ApiParam({name:'id', description: 'ID do usuário', type: Number})
    async findOne(@Param('id') id: string) {
        return this.usersService.findOne(Number(id));
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um usuário pelo ID'})
    @ApiParam({ name: 'id', description: 'ID do usuário', type: Number})
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.usersService.update(Number(id), updateUserDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: "Remover um usuário pelo ID"})
    @ApiParam({ name: 'id', description: 'ID do usuário', type: Number})
    async remove(@Param('id') id: string){
        return this.usersService.delete(Number(id));
    }


}
