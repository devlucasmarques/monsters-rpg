import { IAtack } from './Atack';

interface IMonstersPlayer {
  life: number;
  energy: number;
  level: number;
  xp: number;
  dateSleep: Date;
  atacks: IAtack[];
}

export interface IPlayer {
  username: string;
  password: string;
  money: number;
  ruby: number;
  items: number[];
  monsters: IMonstersPlayer[];
  gameNumber: number;
  victoryNumber: number;
}
