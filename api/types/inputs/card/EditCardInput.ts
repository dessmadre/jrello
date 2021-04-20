import { InputType } from 'type-graphql';

import { IdMixin, TitleMixin } from '../shared';

@InputType()
export class EditCardInput extends IdMixin(TitleMixin(class {})) {}
