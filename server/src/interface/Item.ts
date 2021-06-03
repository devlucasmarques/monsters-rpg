import { ItemSubType, ItemType } from './ItemType';

export interface IItem {
  name: string;
  type: ItemType;
  subType: ItemSubType;
}
