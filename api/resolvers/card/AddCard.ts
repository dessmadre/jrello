import { Arg, Mutation, Resolver, UseMiddleware } from 'type-graphql';

import { AddCardInput } from './../../types/inputs/card/AddCardInput';
import { isAuth } from './../../middleware/isAuth';
import { Card, CardModel } from './../../entity/Card';

@Resolver()
export class AddCardResolver {
  @Mutation(() => Card)
  @UseMiddleware(isAuth)
  async addCard(@Arg('input') input: AddCardInput): Promise<Card> {
    const { parentId, title } = input;

    const card = new CardModel({
      list: parentId,
      title,
    });

    await card.save();

    return card;
  }
}
