import { ObjectId } from 'mongodb';

import { ClassType, Field, InputType } from 'type-graphql';

export const IdMixin = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class IdInput extends BaseClass {
    @Field()
    id: ObjectId;
  }

  return IdInput;
};
