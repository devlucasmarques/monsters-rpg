import mongoose, { Schema } from 'mongoose';

export const Monster = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    name: String,
    type: Number,
    atack: Number,
    defense: Number,
    atacks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AtackModel' }]
  },
  { timestamps: true }
);

const MonsterModel = mongoose.model('MonsterModel', Monster);
export default MonsterModel;
