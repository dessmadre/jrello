import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';

import { MyContext } from './../../types/MyContext';
import { isAuth } from './../../middleware/isAuth';
import { Board, BoardModel } from './../../entity/Board';

@Resolver()
export class AllBoardsResolver {
  @Query(() => [Board])
  @UseMiddleware(isAuth)
  async allBoards(@Ctx() ctx: MyContext) {
    return BoardModel.find({ author: ctx.req.session.userId });
  }
}
