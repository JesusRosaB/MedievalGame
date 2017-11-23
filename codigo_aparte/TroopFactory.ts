import {Injectable} from '@angular/core';
import {Army} from './Army';
import {forEach} from '@angular/router/src/utils/collection';
import {iterator} from 'rxjs/symbol/iterator';

@Injectable()
export class ArmyClass extends Army {
  private TotalArmy: Array<Army> = [];
  getPower(): number {
    for (let iter of this.TotalArmy) {
      let totalPower = 0;
      totalPower += iter.getPower();
      return totalPower;
    }
  }
  Add(troop: Army) {
    this.TotalArmy.push(troop);
  }
  Remove(troop: Army) {
    this.TotalArmy.;
  }
}
