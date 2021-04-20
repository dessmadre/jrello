import { Arg, Mutation, Resolver } from 'type-graphql';

import { EditCardInput } from './../../types/inputs/card/EditCardInput';
import { Card, CardModel } from './../../entity/Card';

@Resolver()
export class EditCardResolver {
  @Mutation(() => Card)
  async editCard(@Arg('input') input: EditCardInput): Promise<Card> {
    const { id, title } = input;

    const card = await CardModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        title,
      },
      {
        runValidators: true,
        new: true,
      }
    );

    if (!card) {
      throw new Error('Card not found');
    }

    return card;
  }
}
