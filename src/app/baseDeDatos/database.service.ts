import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Resources} from '../resources/resources';
import {Collector} from '../buildings/Collector';
import {Market} from '../buildings/market';
import {Townhall} from '../buildings/townhall';
import {Armory} from '../buildings/armory';
import {ArmyService} from '../quarter/army.service';
import {Troop} from '../quarter/trooptypeobject';


@Injectable()
export class DatabaseService {
  // urlAPI = 'https://5a60754811654a0012d3012f.mockapi.io/';
  urlAPIupdate = 'https://5a65b167acd74f00128c607d.mockapi.io/';
  collectors: Collector[] = [];
  constructor(private http: HttpClient) {}
  get(url: string): Observable<any[]> {
    return this.http.get<any[]>(url)
      .map((data) => {
        return data;
      });
  }
  getOne(url: string, id: number): Observable<any> {
    return this.http.get<any>(url + '/' + id)
      .map((data) => {
        return data;
      });
  }
  update(url: string, id: number, data: Object): Observable<void> {
    return this.http.put(url + '/' + id, JSON.parse(JSON.stringify(data)))
      .map(() => {
        // return 'El recurso ha sido actualizado correctamente';
      });
  }

  /*getMarket(): Observable<Market> {
    const url = `${ this.urlAPIupdate }` + 'Market/1';
    return this.http.get<Market>(url)
      .map((data) => {
        return new Market(data.level, data.upgradeCostWood, data.upgradeCostGold,
          data.basePurchasePrice, data.baseSalePrices, data.levelGrowth);
      });
  }

  updateMarket(market: Market): Observable<string> {
    const url = `${this.urlAPIupdate}` + 'Market/1';
    return this.http.put(url, JSON.parse(JSON.stringify(market)))
      .map(() => {
        return 'El mercado ha sido actualizado correctamente';
      });
  }*/
  /*getArmy(): Observable<void> {
    const url = `${ this.urlAPIupdate }` + 'Armory/1';
    return this.http.get<Troop[]>(url)
      .map((data) => {
        data.forEach((t) => this.army.addComponent(t));
      });
  }

  updateArmy(): Observable<string> {
    const url = `${ this.urlAPIupdate }` + 'Armory/1';

    return this.http.put(url, this.army.members.forEach((m) => JSON.parse(JSON.stringify(m))))
      .map(() => {
        return 'La armeria ha sido actualizado correctamente';
      });
  }*/
}
