import { Request, Response, Router } from 'express';

const IndexController: Router = Router();

IndexController.get('/', async (req: Request, res: Response) => {
  res.send('Monsters RPG');
});

export default IndexController;
