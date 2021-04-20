import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';

import { Ref } from '../types/Ref';
import { User } from './User';
import { List } from './List';

@ObjectType()
export class Board {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  public title: string;

  @Field()
  @Property({
    required: true,
    default: '#3B82F6',
  })
  bgColor: string;

  @Field(() => [List])
  @Property({
    ref: 'List',
    type: () => [List],
  })
  public lists: Ref<List>[];

  @Field(() => User)
  @Property({
    ref: User,
    required: true,
  })
  public author: Ref<User>;
}

export const BoardModel = getModelForClass(Board);
