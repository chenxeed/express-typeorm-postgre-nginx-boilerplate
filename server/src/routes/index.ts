import express, { Router, Express } from "express";
import dotenv from 'dotenv';

export const getRouter = (app: Express): Router => {
  const env = dotenv.config();
  const apiPrefix = env.parsed.API_PREFIX || '/';
  const router = express.Router();

  router.get('/', (_req, res) => {
    res.json({
      data: 'Success!',
    });
  });

  app.use(apiPrefix, router);

  return router;  
};
