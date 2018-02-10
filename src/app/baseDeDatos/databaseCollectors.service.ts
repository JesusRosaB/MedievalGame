import {Injectable} from '@angular/core';
import {Collector} from '../buildings/Collector';
import {DatabaseService} from './database.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DatabaseCollectorsService {
  urlAPIupdate = 'https://5a65b167acd74f00128c607d.mockapi.io/Collector';
  collectors: Collector[] = [
    {id: 1, name: 'WoodCutterHouse', level: 1 , upgradeCostWood: [1, 1, 1, 1, 1],
      upgradeCostGold: [1, 1, 1, 1, 1], baseYield: 1, levelGrowth: 2, mod: 1},
    {id: 2, name: 'ButcherShop', level: 1 , upgradeCostWood: [1, 1, 1, 1, 1],
      upgradeCostGold: [1, 1, 1, 1, 1], baseYield: 1, levelGrowth: 2, mod: 1},
    {id: 3, name: 'GoldMine', level: 1 , upgradeCostWood: [1, 1, 1, 1, 1],
      upgradeCostGold: [1, 1, 1, 1, 1], baseYield: 1, levelGrowth: 2, mod: 1}
  ];
  constructor(private databaseService: DatabaseService) {}
  getCollectors(): Observable<Collector[]> {
    return Observable.create((observer) => {
      this.databaseService.get(this.urlAPIupdate).subscribe((data) => {
        data.forEach((d) => this.collectors[d.id - 1] = new Collector(d.level, d.upgradeCostWood, d.upgradeCostGold, d.name,
          d.baseYield, d.levelGrowth, d.id));
        observer.next(this.collectors);
      });
    });
  }
  updateCollector(collector: Collector): Observable<void> {
    return Observable.create(() => {
      this.databaseService.update(this.urlAPIupdate, collector.id, collector).subscribe();
    });
  }
}
