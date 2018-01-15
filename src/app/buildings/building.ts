export abstract class Building {
    public level: number;
    protected upgradeCostWood: number[];
    protected upgradeCostGold: number[];
    public name: string;

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
      return this.upgradeCostWood[this.level];
    }
    levelCostGold(): number {
      return this.upgradeCostGold[this.level];
    }
    levelUp(): void {
        this.level++;
    }
    getName(): string {
      return this.name;
    }

}
