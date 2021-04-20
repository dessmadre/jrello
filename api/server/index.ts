import './env';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import connectMemory from 'memorystore';

import nextApp from '@jrello/app';

import createSession from '../sesstion';
import createSchema from '../schema';

const handle = nextApp.getRequestHandler();
const PORT = process.env.PORT || 8000;

nextApp.prepare().then(async () => {
  await createSession();

  const app = express();

  app.set('port', process.env.PORT || 8000);

  const MemoryStore = connectMemory(session);

  app.use(
    session({
      store: new MemoryStore({
        checkPeriod: 86400000,
      }),
      name: 'q_id',
      secret: `${process.env.COOKIE_SECRET}`,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
        sameSite: 'strict',
      },
    })
  );

  const corsOptions = {
    credentials: true,
  };

  // app.set('trust proxy', 1);

  app.use(cors(corsOptions));
  app.use(express.json());

  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    introspection: true,
    // allows GraphQL to set cookie in the applicaton storage page
    // default is omit which prevents the setting of the cookie for the cient.
    playground: {
      settings: {
        'request.credentials': 'include',
      },
    },
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen({ port: PORT }, () => {
    console.log();
    `👽🖖🏽 Greetings from http://localhost:${PORT}${apolloServer.graphqlPath}`;
  });
});
