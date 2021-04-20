import { Arg, Query, Resolver, UseMiddleware } from 'type-graphql';

import { ObjectId } from 'mongodb';
import { isAuth } from './../../middleware/isAuth';
import { Card, CardModel } from './../../entity/Card';

@Resolver()
export class AllCardsResolver {
  @Query(() => [Card])
  @UseMiddleware(isAuth)
  async allCards(@Arg('listId') listId: ObjectId) {
    return CardModel.find({ list: listId }).populate('list').exec();
  }
}
