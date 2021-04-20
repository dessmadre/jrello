import { InputType } from 'type-graphql';

import { IdMixin, ParentIdMixin } from '../shared';

@InputType()
export class EditListIdInput extends ParentIdMixin(IdMixin(class {})) {}
