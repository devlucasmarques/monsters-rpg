import mongoose, { Schema } from 'mongoose';

const Item = new Schema({
  name: String,
  type: Number,
  subType: Number
});

const ItemModel = mongoose.model('ItemModel', Item);

export default ItemModel;
