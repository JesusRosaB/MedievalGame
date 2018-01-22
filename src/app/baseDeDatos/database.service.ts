import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Resources} from '../resources/resources';
import {Collector} from '../buildings/Collector';
import {Market} from '../buildings/market';
import {Townhall} from '../buildings/townhall';
import {Armory} from '../buildings/armory';

@Injectable()
export class DatabaseService {
  urlAPI = 'https://5a60754811654a0012d3012f.mockapi.io/';
  urlAPIupdate = 'https://5a65b167acd74f00128c607d.mockapi.io/';
  collectors: Collector[] = [];
  constructor(private http: HttpClient) {}
  getResource(id): Observable<Resources> {
    const url = `${ this.urlAPI }` + 'Resource/' + id;
    return this.http.get<Resources>(url)
      .map((data) => {
        return new Resources(data.id, data.name, data.quantity);
      });
  }

  updateResource(resource: Resources): Observable<string> {
    const url = `${ this.urlAPIupdate }` + 'Resource/' + resource.id;
    return this.http.put<string>(url, { resource })
      .map(() => {
        return "El recurso ha sido actualizado correctamente";
      });
  }

  getCollectors(): Observable<Collector[]> {
    const url = `${ this.urlAPI }` + 'Collector';
    return this.http.get<Collector[]>(url)
      .map((data) => {
        data.forEach((d) => this.collectors.push(
          new Collector(d.level, d.upgradeCostWood, d.upgradeCostGold, d.name, d.baseYield, d.levelGrowth)));
        return this.collectors;
      });
  }
  getMarket(): Observable<Market> {
    const url = `${ this.urlAPI }` + 'Market/1';
    return this.http.get<Market>(url)
      .map((data) => {
        return new Market(data.level, data.upgradeCostWood, data.upgradeCostGold,
          data.basePurchasePrice, data.baseSalePrices, data.levelGrowth);
      });
  }
  getTownhall(): Observable<Townhall> {
    const url = `${ this.urlAPI }` + 'Townhall/1';
    return this.http.get<Townhall>(url)
      .map((data) => {
        return new Townhall(data.level, data.upgradeCostWood, data.upgradeCostGold, data.name,
          data.baseResourceLimit, data.baseUnitLimit, data.levelResGrowth, data.levelUnitGrowth);
      });
  }
  getArmory(): Observable<Armory> {
    const url = `${ this.urlAPI }` + 'Armory/1';
    return this.http.get<Armory>(url)
      .map((data) => {
        return new Armory(data.level, data.upgradeCostWood, data.upgradeCostGold);
      });
  }
}
