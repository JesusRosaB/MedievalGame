import {Injectable} from '@angular/core';
import {Townhall} from '../buildings/townhall';
import {DatabaseService} from './database.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DatabaseTownhallService {
  urlAPIupdate = 'https://5a65b167acd74f00128c607d.mockapi.io/Townhall';
  townhall: Townhall = {level: 1, name: 'Townhall', upgradeCostWood: [1, 1, 1, 1, 1], upgradeCostGold: [1, 1, 1, 1, 1],
    baseResourceLimit: 2000, baseUnitLimit: 1000, levelResGrowth: 2000, levelUnitGrowth: 2000};
  constructor(private databaseService: DatabaseService) {}
  getTownhall(): Observable<Townhall> {
    return Observable.create((observer) => {
      this.databaseService.getOne(this.urlAPIupdate, 1).subscribe((data) => {
        this.townhall = new Townhall(data.level, data.upgradeCostWood, data.upgradeCostGold, data.name,
          data.baseResourceLimit, data.baseUnitLimit, data.levelResGrowth, data.levelUnitGrowth);
        observer.next(this.townhall);
      });
    });
  }
  updateTownhall(townhall: Townhall): Observable<void> {
    return Observable.create(() => {
      this.databaseService.update(this.urlAPIupdate, 1, townhall).subscribe();
    });
  }
}
