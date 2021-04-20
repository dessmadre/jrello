import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';

@ObjectType()
export class User {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  public email: string;

  @Property({ required: true })
  password: string;
}

export const UserModel = getModelForClass(User);
