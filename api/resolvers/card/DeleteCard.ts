import { Arg, Mutation, Resolver, UseMiddleware } from 'type-graphql';

import { CardModel } from './../../entity/Card';
import { ObjectId } from 'mongodb';
import { ObjectIdScalar } from './../../schema/object-id.scalar';
import { isAuth } from './../../middleware/isAuth';
import { ApolloError } from 'apollo-server-errors';

@Resolver()
export class DeleteCardResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteCard(
    @Arg('cardId', () => ObjectIdScalar) cardId: ObjectId
  ): Promise<Boolean | undefined> {
    const deleted = await CardModel.findByIdAndDelete({
      _id: cardId,
    });

    if (!deleted) {
      throw new ApolloError('Card not deleted');
    }

    return true;
  }
}
