import { Building } from './building';

export class Barracks extends Building {
  private mod: number;

  constructor(level: number, upgradeCostWood: number[], upgradeCostGold: number[]) {
    super(level, upgradeCostWood, upgradeCostGold, 'barracks');
    this.mod = 1;
  }

}
