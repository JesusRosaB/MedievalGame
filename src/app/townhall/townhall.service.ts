import {Injectable} from '@angular/core';
import {Townhall} from '../buildings/townhall';
import {DatabaseService} from '../baseDeDatos/database.service';
import {DatabaseTownhallService} from '../baseDeDatos/databaseTownhall.service';

@Injectable()
export class TownhallService {
  townhall: Townhall;
  constructor(private databaseService: DatabaseTownhallService) {
    this.databaseService.getTownhall().subscribe((t) => this.townhall = t);
  }
  getTownhall(): Townhall {
    return this.townhall;
  }
  getResourceLimit(): number {
    return this.townhall.baseResourceLimit + this.townhall.levelResGrowth * this.townhall.level;
  }

  getUnitLimit(): number {
    return this.townhall.baseUnitLimit + this.townhall.levelUnitGrowth * this.townhall.level;
  }
}
