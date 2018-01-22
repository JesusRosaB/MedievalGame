import { Building } from './building';

export class Townhall extends Building {
    baseResourceLimit: number;
    baseUnitLimit: number;
    levelResGrowth: number;
    levelUnitGrowth: number;
    constructor(level: number, upgradeCostWood: number[], upgradeCostGold: number[], name: string, baseResourceLimit: number,
                baseUnitLimit: number, levelResGrowth: number, levelUnitGrowth: number) {
        super(level, upgradeCostWood, upgradeCostGold, name);
        this.baseResourceLimit = baseResourceLimit;
        this.baseUnitLimit = baseUnitLimit;
        this.levelResGrowth = levelResGrowth;
        this.levelUnitGrowth = levelUnitGrowth;
    }
}
