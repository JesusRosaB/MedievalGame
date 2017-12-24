import { Building } from './building';

export class Barracks extends Building {
  private mod: number;

  constructor(level: number, upgradeCost: number/*[]*/) {
    super(level, upgradeCost, 'barracks');
    this.mod = 1;
  }

}
