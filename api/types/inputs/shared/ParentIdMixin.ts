import { ObjectId } from 'mongodb';

import { ClassType, Field, InputType } from 'type-graphql';

export const ParentIdMixin = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class ParentIdInput extends BaseClass {
    @Field()
    parentId: ObjectId;
  }

  return ParentIdInput;
};
