import { InputType, Field } from 'type-graphql';
import { IsEmail, MinLength } from 'class-validator';

import { IsEmailAlreadyExist } from '../../../middleware/isEmailAlreadyExist';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: 'A user with this email already exists' })
  email: string;

  @Field()
  @MinLength(5, { message: 'Password must be longer than 5 Characters' })
  password: string;
}
