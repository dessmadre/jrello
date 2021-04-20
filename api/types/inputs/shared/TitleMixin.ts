import { MinLength } from 'class-validator';
import { ClassType, Field, InputType } from 'type-graphql';

export const TitleMixin = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class TitleInput extends BaseClass {
    @Field()
    @MinLength(3, { message: 'Title must be longer than 3 characters' })
    title: string;
  }

  return TitleInput;
};
