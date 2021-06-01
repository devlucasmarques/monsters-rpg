import { NextFunction, Request, Response, Router } from 'express';

const IndexController: Router = Router();

IndexController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send('Monsters RPG');
    } catch (e) {
      next(e);
    }
  },
);

export default IndexController;
