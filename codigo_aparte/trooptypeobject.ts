export class Job {
    private jobName: string;
    private basePower: number;
    private level: number;
    private goldCost: number;
    private meatCost: number;
    private upgradeCost: number;

    private powerGrowth: number;
    private goldGrowth: number;
    private meatGrowth: number;
    private upgradeGrowth: number;

    getJobName(): string {
        return this.jobName;
    }
    getPower(): number {
        return this.basePower + (this.powerGrowth * this.level);
    }

    getLevel(): number {
        return this.level;
    }

    getGoldCost(): number {
        return this.goldCost + (this.goldGrowth * this.level);
    }

    getMeatCost(): number {
        return this.meatCost + (this.meatGrowth * this.level);
    }

    getUpgradeGost(): number {
        return this.upgradeCost + (this.upgradeGrowth * this.level);
    }

    newTroop(): Troop
    {
        return new Troop(this);
    }

    constructor(name: string, power: number, level: number, gc: number, mc: number, uc: number, pg: number,
      gg: number, mg: number, ug: number) {
        this.jobName = name;
        this.basePower = power;
        this.level = level;
        this.goldCost = gc;
        this.meatCost = mc;
        this.upgradeCost = uc;
        this.powerGrowth = pg;
        this.goldGrowth = gg;
        this.meatGrowth = mg;
        this.upgradeGrowth = ug;
    }
}

export class Troop {
    private job: Job;

    constructor(job: Job) {
        this.job = job;
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