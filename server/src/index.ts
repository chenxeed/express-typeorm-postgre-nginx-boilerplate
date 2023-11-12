import { AppDataSource } from "./data-source"
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { generateResolvers, generateSchema } from "./schema";
import { ApolloServer } from 'apollo-server-express';
import { getRouter } from "./routes";

AppDataSource.initialize().then(async () => {
  const env = dotenv.config();
  const port = env.parsed.API_PORT || 3000;
  const router = express.Router();

  const server = new ApolloServer({
    typeDefs: generateSchema(),
    resolvers: generateResolvers(),
  });

  const app = express();
  app.use(helmet({ contentSecurityPolicy: (env.parsed.NODE_ENV === 'production') ? undefined : false }));
  app.use(morgan('combined'));
  app.use(bodyParser.json());
  await server.start();
  server.applyMiddleware({
    app,
    path: '/api/graphql',
    cors: {
      origin: "http://localhost",
      credentials: true
    }
  });

  getRouter(app);
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(error => console.log(error))
