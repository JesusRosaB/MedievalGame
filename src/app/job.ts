import { Troop } from './troop';

export class Job {
    private id: number;
    private jobName: string;
    private level: number;

    private power: number[];
    private goldCost: number[];
    private meatCost: number[];
    private upgradeCost: number[];

    getId(): number {
        return this.id;
    }
    getJobName(): string {
        return this.jobName;
    }

    getLevel(): number {
      return this.level;
    }

    getPower(): number {
        return this.power[this.level];
    }

    getGoldCost(): number {
      return this.goldCost[this.level];
    }

    getMeatCost(): number {
        return this.meatCost[this.level];
    }

    getUpgradeGost(): number {
        return this.upgradeCost[this.level];
    }

    newTroop(): Troop
    {
        return new Troop(this);
    }

    constructor(name: string, level: number, power: number[], gc: number[], mc: number[], uc: number[]) {
        this.jobName = name;
        this.power = power;
        this.level = level;
        this.goldCost = gc;
        this.meatCost = mc;
        this.upgradeCost = uc;
    }
}