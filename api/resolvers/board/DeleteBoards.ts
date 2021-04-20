import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';

import { MyContext } from './../../types/MyContext';
import { ObjectId } from 'mongodb';
import { ObjectIdScalar } from './../../schema/object-id.scalar';
import { isAuth } from './../../middleware/isAuth';
import { BoardModel } from '../../entity/Board';

@Resolver()
export class DeleteBoardResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteBoard(
    @Arg('boardId', () => ObjectIdScalar) boardId: ObjectId,
    @Ctx() ctx: MyContext
  ): Promise<Boolean | undefined> {
    const deleted = await BoardModel.findOneAndDelete({
      _id: boardId,
      author: ctx.req.session.userId,
    });

    if (!deleted) {
      throw new Error('Board not found');
    }

    return true;
  }
}
