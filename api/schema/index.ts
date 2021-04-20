import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { ObjectId } from 'mongodb';
import path from 'path';

import { TypegooseMiddleware } from '../middleware/typegoose';
import { ObjectIdScalar } from './object-id.scalar';

// Resolver imports
import {
  CurrentUserResolver,
  LoginResolver,
  LogoutResolver,
  RegisterResolver,
} from '../resolvers/user';
import {
  AddBoardResolver,
  AllBoardsResolver,
  DeleteBoardResolver,
  EditBoardResolver,
  SingleBoardResolver,
} from '../resolvers/board';
import {
  AddCardResolver,
  AllCardsResolver,
  DeleteCardResolver,
  EditCardResolver,
  EditListIdResolver,
} from '../resolvers/card';
import {
  AddListResolver,
  AllListsResolver,
  DeleteListResolver,
  EditListResolver,
} from '../resolvers/list';

export default async function createSchema(): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    resolvers: [
      // User Resolvers
      CurrentUserResolver,
      LoginResolver,
      LogoutResolver,
      RegisterResolver,
      // Board Resolvers
      AddBoardResolver,
      AllBoardsResolver,
      DeleteBoardResolver,
      EditBoardResolver,
      SingleBoardResolver,
      // List Resolvers
      AddListResolver,
      AllListsResolver,
      DeleteListResolver,
      EditListResolver,
      // Card Resolvers
      AddCardResolver,
      AllCardsResolver,
      DeleteCardResolver,
      EditCardResolver,
      EditListIdResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    globalMiddlewares: [TypegooseMiddleware],
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    validate: false,
  });
  return schema;
}
