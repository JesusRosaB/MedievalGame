export class Building {
    public level: number;
    protected upgradeCost: number/*[]*/;
    public name: string;

    constructor(level: number, upgradeCost: number/*[]*/, name: string) {
        this.level = level;
        this.upgradeCost = upgradeCost;
        this.name = name;
    }
    getLevel(): number {
        return this.level;
    }

    levelCost(): number {
      return this.upgradeCost[this.level];
    }

    levelUp(): void {
        this.level++;
    }

    getName(): string {
      return this.name;
    }

}