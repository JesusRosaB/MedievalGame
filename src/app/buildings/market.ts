import { Building } from './building';
import { Resources } from '../resources/resources';

export class Market extends Building{

	  private basePurchasePrices: number[];
    private baseSalePrices: number[];
    private levelGrowth: number;
    private purchaseMod: number[];
    private saleMod: number[];

    constructor(level: number, upgradeCostWood: number[], upgradeCostGold: number[], basePurchasePrices: number[],
      baseSalePrices: number[], levelGrowth: number) {
        super(level, upgradeCostWood, upgradeCostGold, 'market');
        this.basePurchasePrices = basePurchasePrices;
        this.baseSalePrices = baseSalePrices;
        this.levelGrowth = levelGrowth;
        this.purchaseMod = [1, 1];
        this.saleMod = [1, 1];
        /**this.purchaseMod = basePurchasePrices;
        this.saleMod = baseSalePrices;
        for (let i of this.purchaseMod) {
          i = 1;
        }
        for (let i of this.saleMod) {
          i = 1;
        }*/
    }

    purchaseValue(amount: number, res: Resources): number {
        return this.getPurchasePrices()[res.getId()] * amount;
    }

    saleValue(amount: number, res: Resources): number {
        return this.getSalePrices()[res.getId()] * amount;
    }

    getPurchasePrices(): number[] {
      let truePrices: number[] = this.basePurchasePrices;
      for (let i: number = 0; i < truePrices.length; i++) {
        truePrices[i] *= this.saleMod[i];
      }
      return truePrices;
      /*
        this.truePrices = this.basePurchasePrices;
        for (let i: number = 0; i < this.truePrices.length; i++){
          console.log(this.levelGrowth);
          this.truePrices[i] = this.truePrices[i] * (1 - (this.levelGrowth * (2)));//this.level - 1)));
            this.truePrices[i] *= this.purchaseMod[i];
        }
        return this.truePrices;*/
    }

    getSalePrices(): number[] {
        let truePrices :number[] = this.baseSalePrices;
        for (let i: number = 0; i < truePrices.length; i++) {
            truePrices[i] *= this.saleMod[i];
        }
        return truePrices;
    }

    applyPurchaseMod(mods: number[], time: number) {
        for (let i: number = 0; i < mods.length; i++) {
            this.purchaseMod[i] *= mods[i];
        }
        //TODO: Convertir a función asíncrona que espere a que pase el tiempo.
        for (let i: number = 0; i < mods.length; i++) {
            this.purchaseMod[i] /= mods[i];
        }
    }

    applySaleMod(mods: number[], time: number) {
        for (let i: number = 0; i < mods.length; i++) {
            this.saleMod[i] *= mods[i];
        }
        //TODO: Convertir a función asíncrona que espere a que pase el tiempo.
        for (let i: number = 0; i < mods.length; i++) {
            this.saleMod[i] /= mods[i];
        }
    }

}
