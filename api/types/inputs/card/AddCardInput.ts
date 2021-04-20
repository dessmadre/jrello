import { InputType } from 'type-graphql';

import { TitleMixin, ParentIdMixin } from '../shared';

@InputType()
export class AddCardInput extends ParentIdMixin(TitleMixin(class {})) {}
