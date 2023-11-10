import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Hola"
    user.lastName = "Yeah"
    user.age = 50
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id again!: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")
    dotenv.config();
    const port = process.env.PORT || 3000;
    const router = express.Router();

    const app = express();
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(bodyParser.json());

    router.get('/', async (req: Request, res: Response) => {
      const userRepo = AppDataSource.manager.getRepository(User);
      const result = await userRepo.find();
      console.log('HAI!');
      res.json(result);
    });
    
    router.use('/static', express.static(path.join(__dirname, 'public')));
    
    app.use('/api', router);
    
    app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(error => console.log(error))
