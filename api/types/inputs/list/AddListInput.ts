import { InputType } from 'type-graphql';

import { TitleMixin, ParentIdMixin } from '../shared';

@InputType()
export class AddListInput extends ParentIdMixin(TitleMixin(class {})) {}
