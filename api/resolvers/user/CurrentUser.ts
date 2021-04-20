import { MyContext } from './../../types/MyContext';

import { User, UserModel } from './../../entity/User';
import { Query, Resolver, Ctx } from 'type-graphql';

@Resolver()
export class CurrentUserResolver {
  @Query(() => User, { nullable: true })
  async currentUser(@Ctx() ctx: MyContext) {
    if (!ctx.req.session.userId) {
      return null;
    }

    return UserModel.findById(ctx.req.session.userId);
  }
}
