/* eslint no-underscore-dangle: off */

import { Request, Response, Router } from 'express';
import { IAtack } from '../interface/Atack';
import AtackModel from '../models/Atack';

const AtackController: Router = Router();

AtackController.get('/atacks', async (req: Request, res: Response) => {
  try {
    const atacks = await AtackModel.find();
    res.status(200).send(atacks);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
});

AtackController.post('/atack', async (req: Request, res: Response) => {
  try {
    const atack: IAtack = req.body;
    const newAtack = await new AtackModel(atack).save();
    res.status(201).json(newAtack);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
});

AtackController.delete('/atack/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const deletedAtack = await AtackModel.findOneAndDelete({
      _id
    });
    deletedAtack
      ? res.status(200).json(deletedAtack)
      : res.status(404).json('Ataque não encontrado!');
  } catch (error) {
    res.status(500).json({
      error
    });
  }
});

AtackController.put('/atack/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const atacks: IAtack = req.body;
    const atackEdited = await AtackModel.findByIdAndUpdate(_id, atacks);
    atackEdited
      ? res.status(200).json(atackEdited)
      : res.status(404).json('Ataque não encontrado!');
  } catch (error) {
    res.status(500).json({
      error
    });
  }
});

AtackController.get('/atack/:_id', async (req: Request, res: Response) => {
  try {
    const _id = req.params;
    const atack = await AtackModel.findOne(_id);
    atack
      ? res.status(200).json(atack)
      : res.status(404).json('Ataque não encontrado!');
  } catch (error) {
    res.status(500).json({
      error
    });
  }
});

export default AtackController;
