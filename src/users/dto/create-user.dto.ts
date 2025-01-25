import { IsString, IsEmail, IsNotEmpty, IsDateString}  from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto{
    @ApiProperty({ description: 'O email do usuário', example:'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'A senha do usuário', example: 'password123'})
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({description: 'O nome do usuário', example: 'John Doe'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'A data de nascimento do usuário', example: '2000-01-01'})
    @IsDateString()
    @IsNotEmpty()
    birthDate: string;
}


