import { Router, Request, Response } from 'express';
import { IMonster } from '../interface/Monster';
import MonsterModel from '../models/Monster';

const MonsterControler = Router();

MonsterControler.get('/monsters', async (req: Request, res: Response) => {
  try {
    const monstersRes = await MonsterModel.find();
    res.status(200).json(monstersRes);
  } catch (error) {
    res.status(500).json(error);
  }
});

MonsterControler.post('/monster', async (req: Request, res: Response) => {
  try {
    const monster: IMonster = req.body;
    const monsterRes = await MonsterModel.create(monster);

    res.status(201).json(monsterRes);
  } catch (error) {
    res.status(500).json(error);
  }
});

MonsterControler.delete(
  '/monster/:_id',
  async (req: Request, res: Response) => {
    try {
      const { _id } = req.params;
      const monsterRes = await MonsterModel.findByIdAndDelete(_id);
      monsterRes
        ? res.status(200).json(monsterRes)
        : res.status(404).json('Monstro não encontrado!');
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

MonsterControler.put('/monster/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const monster: IMonster = req.body;
    const monsterRes = await MonsterModel.findByIdAndUpdate(_id, monster);
    monsterRes
      ? res.status(200).json(monsterRes)
      : res.status(404).json('Monstro não encontrado!');
    res.status(200).json(monsterRes);
  } catch (error) {
    res.status(500).json(error);
  }
});

MonsterControler.get('/monster/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const monsterRes = await MonsterModel.findById(_id).populate(
      'atacks.atack'
    );
    monsterRes
      ? res.status(200).json(monsterRes)
      : res.status(404).json('Monstro não encontrado!');
  } catch (error) {
    res.status(500).json(error);
  }
});

export default MonsterControler;
