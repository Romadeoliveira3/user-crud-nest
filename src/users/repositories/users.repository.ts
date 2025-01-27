import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { IsEmail } from 'class-validator';


@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        const { email, password, name, birthDate } = createUserDto;
        return this.prisma.user.create({
          data: {
            email,
            password,
            name,
            birthDate: new Date(birthDate),
          },
        });
      }
      

    async findAll(){
        return this.prisma.user.findMany({
          select:{
            id: true,
            email: true,
            name: true,
            birthDate: true,
            createdAt: true,
            updatedAt: true,
          },
        });
    }

    async findOne(id: number){
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const { birthDate, ...rest } = updateUserDto;
    
        return this.prisma.user.update({
          where: { id },
          data: {
            ...rest,
            birthDate: birthDate ? new Date(birthDate) : undefined,
          },
        });
      }
    async delete(id: number) {
        return this.prisma.user.delete({
          where: { id },
        });
    }
}
