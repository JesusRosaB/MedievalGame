import { Job } from './job';

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
    getJobName(): string {
        return this.job.getJobName();
    }

    getPower(): number {
        return this.job.getPower();
    }
    getLevel(): number {
        return this.job.getLevel();
    }
  
}