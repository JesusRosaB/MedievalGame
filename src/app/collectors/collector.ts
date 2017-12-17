import { Building } from '../building';
import { Resources } from '../resources/resources';

export class Collector extends Building {

	private resource: Resources;
    private baseYield: number;
    private levelGrowth: number;
    private mod: number;

    constructor(level: number, upgradeCost: number[], resource: Resources, baseYield: number, levelGrowth: number) {
        super(level, upgradeCost, "collector of "+resource.getName());
        this.baseYield = baseYield;
        this.levelGrowth = levelGrowth;
        this.mod = 1;
    }

    yieldValue(): number{
        return this.baseYield * this.level * this.mod;
    }

    applyMod(newMod: number, time: number): void {
        this.mod *= newMod;
        //Tiempo
        this.mod /= newMod;
    }

}
