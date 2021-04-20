import { Arg, Mutation, Resolver } from 'type-graphql';

import { AddListInput } from './../../types/inputs/list/AddListInput';
import { List, ListModel } from './../../entity/List';

@Resolver()
export class AddListResolver {
  @Mutation(() => List)
  async addList(@Arg('input') input: AddListInput): Promise<List> {
    const { title, parentId } = input;

    const list = new ListModel({
      title,
      board: parentId,
    } as List);

    await list.save();

    return list;
  }
}
