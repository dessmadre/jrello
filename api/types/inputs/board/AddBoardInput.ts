import { InputType, Field } from 'type-graphql';

import { TitleMixin } from '../shared/TitleMixin';

@InputType()
export class AddBoardInput extends TitleMixin(class {}) {
  @Field()
  bgColor: string;
}
