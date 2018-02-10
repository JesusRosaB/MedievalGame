import {Injectable} from '@angular/core';
import {DatabaseService} from './database.service';
import {Observable} from 'rxjs/Observable';
import {Armory} from '../buildings/armory';

@Injectable()
export class DatabaseArmoryService {
  urlAPIupdate = 'https://5a65b167acd74f00128c607d.mockapi.io/Armory';
  armory: Armory = {level: 1, name: 'armory', upgradeCostWood: [1, 1, 1, 1, 1], upgradeCostGold: [1, 1, 1, 1, 1], mod: [1, 1, 1, 1, 1]};
  constructor(private databaseService: DatabaseService) {}
  getArmory(): Observable<Armory> {
    return Observable.create((observer) => {
      this.databaseService.getOne(this.urlAPIupdate, 1).subscribe((data) => {
        this.armory = new Armory(data.level, data.upgradeCostWood, data.upgradeCostGold);
        observer.next(this.armory);
      });
    });
  }
  updateArmory(armory: Armory): Observable<void> {
    return Observable.create(() => {
      this.databaseService.update(this.urlAPIupdate, 1, armory).subscribe();
    });
  }
}
