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

export class Troop {
    private id: number;
    private job: Job;

    constructor(job: Job) {
        this.job = job;
    }
    getId(): number {
        return this.id;
    }
    getJobId(): number {
        return this.job.getId();
    }
    getjobName(): string {
        return this.job.getJobName();
    }

    getPower(): number {
        return this.job.getPower();
    }
    getLevel(): number {
        return this.job.getLevel();
    }
  
}