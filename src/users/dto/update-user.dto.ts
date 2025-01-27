import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsDateString } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'O email do usuário', example: 'user@example.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ description: 'A senha do usuário', example: 'newpassword123' })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiPropertyOptional({ description: 'O nome do usuário', example: 'John Smith' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'A data de nascimento do usuário', example: '1990-12-31' })
  @IsOptional()
  @IsDateString()
  birthDate?: string;
}
