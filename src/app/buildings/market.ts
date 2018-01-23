import { Building } from './building';
import { Resources } from '../resources/resources';

export class Market extends Building {
  basePurchasePrice: number[];
  baseSalePrices: number[];
  levelGrowth: number;
  purchaseMod: number[];
  saleMod: number[];

  constructor(level: number, upgradeCostWood: number[], upgradeCostGold: number[], basePurchasePrices: number[],
    baseSalePrices: number[], levelGrowth: number) {
    super(level, upgradeCostWood, upgradeCostGold, 'market');
    this.basePurchasePrice = basePurchasePrices;
    this.baseSalePrices = baseSalePrices;
    this.levelGrowth = levelGrowth;
    this.purchaseMod = [1, 1];
    this.saleMod = [1, 1];
    this.purchaseMod = basePurchasePrices;
    this.saleMod = baseSalePrices;
    for (let i of this.purchaseMod) {
      i = 1;
    }
    for (let i of this.saleMod) {
      i = 1;
    }
  }
}
