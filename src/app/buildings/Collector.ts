import { Building } from './building';

export class Collector extends Building {
    baseYield: number;
    levelGrowth: number;
    mod: number;

    constructor(level: number, upgradeCostWood: number[], upgradeCostGold: number[], name: string, baseYield: number, levelGrowth: number) {
        super(level, upgradeCostWood, upgradeCostGold, name);
        this.baseYield = baseYield;
        this.levelGrowth = levelGrowth;
        // this.mod = 1;
    }

    /*applyMod(newMod: number, time: number): void {
        this.mod *= newMod;
        // Tiempo
        this.mod /= newMod;
    }*/
}
