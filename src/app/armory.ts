import { Building } from './building';
import { Job } from './job';

export class Armory extends Building {
    private mod: number[];

    constructor(level: number, upgradeCost: number/*[]*/) {
      super(level, upgradeCost, 'armory');
      this.mod = [1, 1, 1, 1, 1];
      /*for (let i of this.mod){
        i = 1;
      }*/
    }

    getUpgradeCost(job: Job): number {
        return job.getUpgradeGost() * this.mod[job.getId()];
    }

}
