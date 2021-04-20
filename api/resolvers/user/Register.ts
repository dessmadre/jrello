import { User, UserModel } from '../../entity/User';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import bcrypt from 'bcryptjs';

import { MyContext } from '../../types/MyContext';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: MyContext
  ): Promise<User> {
    const hasedPassword = await bcrypt.hash(password, 12);
    const user = new UserModel({
      email,
      password: hasedPassword,
    });

    await user.save();

    ctx.req.session.userId = user._id;

    return user;
  }
}
