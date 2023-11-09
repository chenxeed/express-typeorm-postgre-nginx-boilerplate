import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import "reflect-metadata";
import { getDB } from './db';

dotenv.config();
const port = process.env.PORT || 3000;
const router = express.Router();

const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json());

router.get('/', async (req: Request, res: Response) => {
  const result = await getDB().query('SELECT * FROM testme');
  res.json(result);
});

router.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});