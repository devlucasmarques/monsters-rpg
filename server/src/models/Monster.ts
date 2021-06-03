import mongoose, { Schema } from 'mongoose';

const AtacksMonsters = new Schema({
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
    atacks: [AtacksMonsters]
  },
  { timestamps: true }
);

const MonsterModel = mongoose.model('MonsterModel', Monster);
export default MonsterModel;
