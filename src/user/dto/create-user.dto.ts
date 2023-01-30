import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
    createdAt?: Date;
}