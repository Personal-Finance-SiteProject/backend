import { IsNotEmpty, IsEmail, IsString, IsOptional } from 'class-validator';

export class CreateOrUpdateUserDto {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    avatar?: string;
}
