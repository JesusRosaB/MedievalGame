import { Building } from '../building';

export class Collector extends Building {
    // private resource: Resources;
    private baseYield: number;
    private levelGrowth: number;
    private mod: number;

    constructor(level: number, upgradeCost: number/*[]*/, name: string, /*resource: Resources,*/ baseYield: number, levelGrowth: number) {
        super(level, upgradeCost, /*'collector of ' + resource.getName()*/ name);
        this.baseYield = baseYield;
        this.levelGrowth = levelGrowth;
        this.mod = 1;
    }

    yieldValue(): number {
        return this.baseYield * this.level * this.mod;
    }

    applyMod(newMod: number, time: number): void {
        this.mod *= newMod;
        // Tiempo
        this.mod /= newMod;
    }
}
