import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';

import { Ref } from '../types/Ref';
import { List } from './List';

@ObjectType()
export class Card {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  public title: string;

  @Field(() => List)
  @Property({ ref: 'List' })
  list: Ref<List>;
}

export const CardModel = getModelForClass(Card);
