import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;
  @IsOptional()
  @IsString()
  firebaseId?: string;
}
