import { Router } from 'express';
import IndexController from './controllers/indexController';
import AtackController from './controllers/atackController';
import MonsterControler from './controllers/monsterController';

const router = Router();
router.get('/', IndexController);

router.get('/atacks', AtackController);
router.post('/atack', AtackController);
router.delete('/atack/:_id', AtackController);
router.put('/atack/:_id', AtackController);
router.get('/atack/:_id', AtackController);

router.get('/monsters', MonsterControler);
router.post('/monster', MonsterControler);
router.delete('/monster/:_id', MonsterControler);
router.put('/monster/:_id', MonsterControler);
router.get('/monster/:_id', MonsterControler);

export default router;
