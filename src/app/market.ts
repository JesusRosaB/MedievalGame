import { Building } from './building';
import { Resources } from './resources/resources';

export class Market extends Building{

	private basePurchasePrices: number[];
    private baseSalePrices: number[];
    private levelGrowth: number;
    private purchaseMod: number[];
    private saleMod: number[];

    constructor(level: number, upgradeCost: number/*[]*/, basePurchasePrices: number[],
      baseSalePrices: number[], levelGrowth: number) {
        super(level, upgradeCost, 'market');
        this.basePurchasePrices = basePurchasePrices;
        this.baseSalePrices = baseSalePrices;
        this.levelGrowth = levelGrowth;
        for (let i of this.purchaseMod) {
          i = 1;
        }
        for (let i of this.saleMod) {
          i = 1;
        }
    }

    purchaseValue(amount: number, res: Resources): number {
        return this.getPurchasePrices()[res.getId()] * amount;
    }

    saleValue(amount: number, res: Resources): number {
        return this.getSalePrices()[res.getId()] * amount;
    }

    getPurchasePrices(): number[] {
        let truePrices: number[] = this.basePurchasePrices;
        for (let i: number = 0; i < truePrices.length; i++){
            truePrices[i] *= this.purchaseMod[i];
        }
        return truePrices;
    }

    getSalePrices(): number[] {
        let truePrices = this.baseSalePrices;
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
