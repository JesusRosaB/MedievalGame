import { Building } from './building';

export class Townhall extends Building {
    private baseResourceLimit: number;
    private baseUnitLimit: number;
    private levelResGrowth: number;
    private levelUnitGrowth: number;

    constructor(level: number, upgradeCost: number/*[]*/, name: string, baseResourceLimit: number, baseUnitLimit: number, levelResGrowth: number, levelUnitGrowth: number) {
        super(level, upgradeCost, name);
        this.baseResourceLimit = baseResourceLimit;
        this.baseUnitLimit = baseUnitLimit;
        this.levelResGrowth = levelResGrowth;
        this.levelUnitGrowth = levelUnitGrowth;
    }

    getResourceLimit(): number {
        return this.baseResourceLimit + this.levelResGrowth * this.level;
    }

    getUnitLimit(): number {
        return this.baseUnitLimit + this.levelUnitGrowth * this.level;
    }

}
