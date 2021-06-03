import mongoose, { Schema } from 'mongoose';

const MonstersPlayer = new Schema({
  monster: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MonsterModel' }],
  life: Number,
  energy: Number,
  level: Number,
  xp: Number,
  dateSleep: Date
});

const ItemPlayer = new Schema({
  item: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ItemModel' }],
  dataOpen: Date
});

const Player = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    username: String,
    password: String,
    money: Number,
    ruby: Number,
    items: [ItemPlayer],
    monsters: [MonstersPlayer],
    gameNumber: Number,
    victoryNumber: Number
  },
  { timestamps: true }
);

const PlayerModel = mongoose.model('PlayerModel', Player);
export default PlayerModel;
