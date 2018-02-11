import {Injectable} from '@angular/core';
import {DatabaseService} from './database.service';
import {Market} from '../buildings/market';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DatabaseMarketService {
  urlAPIupdate = 'https://5a65b167acd74f00128c607d.mockapi.io/Market';
  market: Market = {level: 1, name: 'market', upgradeCostWood: [1, 1, 1, 1, 1], upgradeCostGold: [1, 1, 1, 1, 1],
    basePurchasePrice: [2, 2], baseSalePrices: [0.5, 0.5], levelGrowth: 0.1, purchaseMod: [1, 1], saleMod: [1, 1]};
  constructor(private databaseService: DatabaseService) {}
  getMarket(): Observable<Market> {
    return Observable.create((observer) => {
      this.databaseService.getOne(this.urlAPIupdate, 1).subscribe((data) => {
        this.market = new Market(data.level, data.upgradeCostWood, data.upgradeCostGold,
          data.basePurchasePrice, data.baseSalePrices, data.levelGrowth);
        observer.next(this.market);
      });
    });
  }
  updateMarket(market: Market): Observable<void> {
    return Observable.create(() => {
      this.databaseService.update(this.urlAPIupdate, 1, market).subscribe();
    });
  }
}
