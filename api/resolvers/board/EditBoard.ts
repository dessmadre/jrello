import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

import { Board, BoardModel } from './../../entity/Board';
import { MyContext } from './../../types/MyContext';
import { EditBoardInput } from './../../types/inputs/board/EditBoardInput';

@Resolver()
export class EditBoardResolver {
  @Mutation(() => Board)
  async editBoard(
    @Arg('input') input: EditBoardInput,
    @Ctx() ctx: MyContext
  ): Promise<Board> {
    const { id, title } = input;

    const board = await BoardModel.findOneAndUpdate(
      {
        _id: id,
        author: ctx.req.session.userId,
      },
      {
        title,
      },
      {
        runValidators: true,
        new: true,
      }
    );
    if (!board) {
      throw new Error('Board not found');
    }

    return board;
  }
}
