import {Injectable} from '@angular/core';
import {Army} from '../army';

@Injectable()
export class QuarterService extends Army {
  private TotalArmy: Array<Army> = [];
  getPower(): number {
    let totalPower = 0;
    for (let iter of this.TotalArmy) {
      totalPower += iter.getPower();
    }
    return totalPower;
  }
  Add(troop: Army) {
    this.TotalArmy.push(troop);
  }
  Remove(troop: Army) {
    if (this.TotalArmy.indexOf(troop) !== -1) {
      this.TotalArmy.splice(this.TotalArmy.indexOf(troop), 1);
    }
  }
}
