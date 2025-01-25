import { IsString, IsEmail, IsNotEmpty, IsDateString}  from 'class-validator';

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDateString()
    @IsNotEmpty()
    birthDate: string;
}


