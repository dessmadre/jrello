import { ObjectId } from 'mongodb';
import { Board, BoardModel } from './../../entity/Board';
import { Arg, Query, Resolver } from 'type-graphql';

@Resolver()
export class SingleBoardResolver {
  @Query(() => Board, { nullable: true })
  async singleBoard(@Arg('boardId', () => ObjectId) boardId: ObjectId) {
    return BoardModel.findOne({ _id: boardId });
  }
}
