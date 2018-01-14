import {ArmyElement} from './ArmyElement';

export class Job {
    private id: number;
    private jobName: string;
    private level: number;

    private power: number[];
    private health: number;
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
        return this.power[this.level - 1];
    }

    getHealth(): number {
      return this.health;
    }

    getGoldCost(): number {
      return this.goldCost[this.level - 1];
    }

    getMeatCost(): number {
        return this.meatCost[this.level - 1];
    }

    getUpgradeGost(): number {
        return this.upgradeCost[this.level - 1];
    }

    levelUp(): void {
      this.level += 1;
    }

    newTroop(): Troop {
        return new Troop(this);
    }

    constructor(id: number, name: string, level: number, power: number[], health: number, gc: number[], mc: number[], uc: number[]) {
        this.id = id;
        this.jobName = name;
        this.power = power;
        this.level = level;
        this.health = health;
        this.goldCost = gc;
        this.meatCost = mc;
        this.upgradeCost = uc;
    }
}

export class Troop extends ArmyElement{
    private id: number;
    private job: Job;
    private health: number;

    constructor(job: Job) {
        super();
        this.job = job;
        this.health = job.getHealth();
    }
    getId(): number {
        return this.id;
    }
    getJobId(): number {
        return this.job.getId();
    }
    getJobName(): string {
        return this.job.getJobName();
    }

    getPower(): number {
        return this.job.getPower();
    }

    getLevel(): number {
        return this.job.getLevel();
    }

    getCurrentHealth(): number {
      return this.health;
    }

    getMaxHealth(): number {
      return this.job.getHealth();
    }
}
