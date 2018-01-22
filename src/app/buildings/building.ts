export abstract class Building {
    level: number;
    upgradeCostWood: number[];
    upgradeCostGold: number[];
    name: string;

    constructor(level: number, upgradeCostWood: number[], upgradeCostGold: number[], name: string) {
        this.level = level;
        this.upgradeCostWood = upgradeCostWood;
        this.upgradeCostGold = upgradeCostGold;
        this.name = name;
    }
}
