import { Card, CardModel } from './../../entity/Card';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { EditListIdInput } from '../../types/inputs/card/EditListIdInput';

@Resolver()
export class EditListIdResolver {
  @Mutation(() => Card)
  async editListId(@Arg('input') input: EditListIdInput): Promise<Card> {
    const { id, parentId } = input;

    const card = (await CardModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        list: parentId,
      },
      {
        runValidators: true,
        new: true,
      }
    )) as Card;

    if (!card) {
      throw new Error('Card was not found');
    }

    return card;
  }
}
