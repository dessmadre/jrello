import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';

import { MyContext } from './../../types/MyContext';
import { AddBoardInput } from './../../types/inputs/board/AddBoardInput';
import { isAuth } from './../../middleware/isAuth';
import { Board, BoardModel } from './../../entity/Board';

@Resolver()
export class AddBoardResolver {
  @Mutation(() => Board)
  @UseMiddleware(isAuth)
  async addBoard(
    @Arg('input') input: AddBoardInput,
    @Ctx() ctx: MyContext
  ): Promise<Board> {
    const board = new BoardModel({
      ...input,
      author: ctx.req.session.userId,
    } as Board);

    await board.save();

    return board;
  }
}
