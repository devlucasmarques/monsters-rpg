import mongoose, { Schema } from 'mongoose';

export const Atack = new Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: false
    },
    name: String,
    damage: Number,
    energy: Number,
    type: Number
  },
  { timestamps: true }
);

const AtackModel = mongoose.model('AtackModel', Atack);

export default AtackModel;
