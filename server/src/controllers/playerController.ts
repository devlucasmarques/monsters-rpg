import { Request, Response, Router } from 'express';
import { IPlayer } from '../interface/Player';
import PlayerModel from '../models/Player';

const PlayerController = Router();

PlayerController.get('/players', async (req: Request, res: Response) => {
  try {
    const playerRes = await PlayerModel.find();
    res.status(200).json(playerRes);
  } catch (error) {
    res.status(500).json(error);
  }
});

PlayerController.post('/player', async (req: Request, res: Response) => {
  try {
    const player: IPlayer = req.body;
    const playerRes = await PlayerModel.create(player);
    res.status(201).json(playerRes);
  } catch (error) {
    res.status(500).json(error);
  }
});

PlayerController.delete('/player/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const playerRes = await PlayerModel.findByIdAndDelete(_id);
    playerRes
      ? res.status(200).json(playerRes)
      : res.status(404).json('Player não encontrado');
  } catch (error) {
    res.status(500).json(error);
  }
});

PlayerController.put('/player/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const player: IPlayer = req.body;
    const playerRes = await PlayerModel.findByIdAndUpdate(_id, player);
    playerRes
      ? res.status(200).json(playerRes)
      : res.status(404).json('Player não encontrado');
  } catch (error) {
    res.status(500).json(error);
  }
});

PlayerController.get('/player/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const playerRes = await PlayerModel.findById(_id)
      .populate('monsters.monster')
      .populate('items.item');
    playerRes
      ? res.status(200).json(playerRes)
      : res.status(404).json('Player não encontrado');
  } catch (error) {
    res.status(500).json(error);
  }
});

export default PlayerController;
