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
    getLevel(): number {
        return this.level;
    }
    levelCostWood(): number {
      return this.upgradeCostWood[this.level - 1];
    }
    levelCostGold(): number {
      return this.upgradeCostGold[this.level - 1];
    }
    levelUp(): void {
        this.level++;
    }
    getName(): string {
      return this.name;
    }
    levelUpPosible(): boolean {
      return this.level < this.upgradeCostWood.length;
    }
}
