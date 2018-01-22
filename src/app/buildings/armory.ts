import { Building } from './building';
import { Job } from '../job';

export class Armory extends Building {
    mod: number[];

    constructor(level: number, upgradeCostWood: number[], upgradeCostGold: number[]) {
      super(level, upgradeCostWood, upgradeCostGold, 'armory');
      this.mod = [1, 1, 1, 1, 1];
      for (let i of this.mod) {
        i = 1;
      }
    }
}
