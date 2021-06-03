import { Router } from 'express';
import IndexController from './controllers/indexController';
import AtackController from './controllers/atackController';

const router = Router();
router.get('/', IndexController);

router.get('/atacks', AtackController);
router.post('/atack', AtackController);
router.delete('/atack/:_id', AtackController);
router.put('/atack/:_id', AtackController);
router.get('/atack/:_id', AtackController);

export default router;
