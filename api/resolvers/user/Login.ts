import bcrypt from 'bcryptjs';
import { MyContext } from './../../types/MyContext';
import { User, UserModel } from './../../entity/User';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error('There is no user registered with that email');
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error('Password does not match');
    }

    ctx.req.session.userId = user._id;

    return user;
  }
}
