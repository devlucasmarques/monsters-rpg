import { AbilityType } from './AbilityType';

export interface IAtack {
  id: number | null;
  name: string;
  damage: number;
  energy: number;
  type: AbilityType;
}
