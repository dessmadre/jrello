import { List, ListModel } from './../../entity/List';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { EditListInput } from '../../types/inputs/list/EditListInput';

@Resolver()
export class EditListResolver {
  @Mutation(() => List)
  async editList(@Arg('input') input: EditListInput): Promise<List> {
    const { title, id } = input;

    const list = await ListModel.findOneAndUpdate(
      { _id: id },
      { title },
      { runValidators: true, new: true }
    );

    if (!list) {
      throw new Error('List not found');
    }

    return list;
  }
}
