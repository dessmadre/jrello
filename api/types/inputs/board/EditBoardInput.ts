import { InputType } from 'type-graphql';

import { TitleMixin, IdMixin } from '../shared/';

@InputType()
export class EditBoardInput extends IdMixin(TitleMixin(class {})) {}
