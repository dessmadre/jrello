import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';

import { Ref } from '../types/Ref';
import { Board } from './Board';
import { Card } from './Card';

@ObjectType()
export class List {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property()
  public title: string;

  @Field(() => Board)
  @Property({ ref: 'Board' })
  board: Ref<Board>;

  @Field(() => [Card])
  @Property({
    ref: 'Card',
    type: () => [Card],
  })
  cards: Ref<Card>[];
}

export const ListModel = getModelForClass(List);
