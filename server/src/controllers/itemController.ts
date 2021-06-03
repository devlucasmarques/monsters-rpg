import { Request, Response, Router } from 'express';
import { IItem } from '../interface/Item';
import ItemModel from '../models/Item';

const ItemController = Router();

ItemController.get('/items', async (req: Request, res: Response) => {
  try {
    const itemsRes = await ItemModel.find();
    res.status(200).json(itemsRes);
  } catch (error) {
    res.status(500).json(error);
  }
});

ItemController.post('/item', async (req: Request, res: Response) => {
  try {
    const item: IItem = req.body;
    const itemRes = await ItemModel.create(item);
    res.status(201).json(itemRes);
  } catch (error) {
    res.status(500).json(error);
  }
});

ItemController.delete('/item/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const itemRes = await ItemModel.findByIdAndDelete(_id);
    itemRes
      ? res.status(200).json(itemRes)
      : res.status(404).json('Item não encontrado!');
  } catch (error) {
    res.status(500).json(error);
  }
});

ItemController.put('/item/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const item: IItem = req.body;
    const itemRes = await ItemModel.findByIdAndUpdate(_id, item);
    itemRes
      ? res.status(200).json(itemRes)
      : res.status(404).json('Item não encontrado!');
  } catch (error) {
    res.status(500).json(error);
  }
});

ItemController.get('/item/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const itemRes = await ItemModel.findById(_id);
    itemRes
      ? res.status(200).json(itemRes)
      : res.status(404).json('Item não encontrado!');
  } catch (error) {
    res.status(500).json(error);
  }
});

export default ItemController;
