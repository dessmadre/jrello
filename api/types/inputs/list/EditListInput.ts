import { InputType } from 'type-graphql';

import { IdMixin, TitleMixin } from '../shared';

@InputType()
export class EditListInput extends IdMixin(TitleMixin(class {})) {}
