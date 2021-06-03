import { AbilityType } from './AbilityType';
import { IAtack } from './Atack';

interface AtacksMonsters {
  atacks: IAtack;
  level: number;
}

export interface IMonster {
  name: string;
  type: AbilityType;
  atack: number;
  defense: number;
  atacks: AtacksMonsters[];
}
