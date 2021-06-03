import { Router } from 'express';
import IndexController from './controllers/indexController';
import AtackController from './controllers/atackController';
import MonsterControler from './controllers/monsterController';
import PlayerController from './controllers/playerController';
import ItemController from './controllers/itemController';

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

router.get('/players', PlayerController);
router.post('/player', PlayerController);
router.delete('/player/:_id', PlayerController);
router.put('/player/:_id', PlayerController);
router.get('/player/:_id', PlayerController);

router.get('/items', ItemController);
router.post('/item', ItemController);
router.delete('/item/:_id', ItemController);
router.put('/item/:_id', ItemController);
router.get('/item/:_id', ItemController);

export default router;
