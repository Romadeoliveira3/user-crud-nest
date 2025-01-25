import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
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
        return this.prisma.user.findMany();
    }

    async findOne(id: number){
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async update(id: number, UpdateUserDto: UpdateUserDto){
        return this.prisma.user.update({
            where: { id },
            data: UpdateUserDto,
        });
    }

    async delete(id: number) {
        return this.prisma.user.delete({
          where: { id },
        });
    }
}
