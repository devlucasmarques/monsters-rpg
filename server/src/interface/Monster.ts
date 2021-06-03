import { AbilityType } from './AbilityType';
import { IAtack } from './Atack';

export interface IMonster {
  name: string;
  type: AbilityType;
  atack: number;
  defense: number;
  atacks: IAtack[];
}
