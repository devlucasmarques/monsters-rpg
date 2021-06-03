import mongoose, { Schema } from 'mongoose';

const MonsterAtack = new Schema({
  atack: { type: mongoose.Schema.Types.ObjectId, ref: 'AtackModel' },
  level: Number
});

export const Monster = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    name: String,
    type: Number,
    atack: Number,
    defense: Number,
    atacks: [MonsterAtack]
  },
  { timestamps: true }
);

const MonsterModel = mongoose.model('MonsterModel', Monster);
export default MonsterModel;
