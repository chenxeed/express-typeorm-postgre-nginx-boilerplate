import { AppDataSource } from "./data-source"
import { User } from "./modules/User/entity/User"
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { UserResolver } from "./modules/User/resolvers/UserResolver";

AppDataSource.initialize().then(async () => {
  dotenv.config();
  const port = process.env.PORT || 3000;
  const router = express.Router();

  const app = express();
  app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
  app.use(morgan('combined'));
  app.use(bodyParser.json());

  // Build GraphQL schema
  
  const root = {
    hello () {
      return "Hello World"
    }
  };

  app.use("/graphql", graphqlHTTP({
    schema: await buildSchema({
      resolvers: [UserResolver]
    }),
    rootValue: root,
    graphiql: true 
  }));

  router.get('/', async (req: Request, res: Response) => {
    const userRepo = AppDataSource.manager.getRepository(User);
    const result = await userRepo.find();
    res.json(result);
  });
  
  router.use('/static', express.static(path.join(__dirname, 'public')));
  
  app.use('/api', router);
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(error => console.log(error))
