import { Arg, Query, Resolver } from 'type-graphql';

import { ObjectId } from 'mongodb';
import { ObjectIdScalar } from './../../schema/object-id.scalar';
import { List, ListModel } from './../../entity/List';

@Resolver()
export class AllListsResolver {
  @Query(() => [List])
  async allLists(@Arg('boardId', () => ObjectIdScalar) boardId: ObjectId) {
    return ListModel.find({ board: boardId }).populate('board').exec();
  }
}
