import { Arg, Mutation, Resolver } from 'type-graphql';

import { ObjectId } from 'mongodb';
import { ListModel } from './../../entity/List';
import { ObjectIdScalar } from './../../schema/object-id.scalar';

@Resolver()
export class DeleteListResolver {
  @Mutation(() => Boolean)
  async deleteList(
    @Arg('listId', () => ObjectIdScalar) listId: ObjectId
  ): Promise<Boolean> {
    const deleted = await ListModel.findOneAndDelete({
      _id: listId,
    });

    if (!deleted) {
      throw new Error('List not found');
    }

    return true;
  }
}
