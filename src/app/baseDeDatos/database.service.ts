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
  constructor(private http: HttpClient, private army: ArmyService) {}
  get(url: string): Observable<any[]> {
    return this.http.get<any[]>(url)
      .map((data) => {
        return data;
      });
  }
  getOne(url: string, id: number): Observable<any> {
    console.log('LlegoGetOne');
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

  getResource(id): Observable<Resources> {
    const url = `${ this.urlAPIupdate }` + 'Resource/' + id;
    return this.http.get<Resources>(url)
      .map((data) => {
        return new Resources(data.id, data.name, data.quantity);
      });
  }

  updateResource(resource: Resources): Observable<string> {
    const url = `${ this.urlAPIupdate }` + 'Resource/' + resource.id;
    return this.http.put(url, JSON.parse(JSON.stringify(resource)))
      .map(() => {
        return 'El recurso ha sido actualizado correctamente';
      });
  }

  getCollectors(): Observable<Collector[]> {
    const url = `${ this.urlAPIupdate }` + 'Collector';
    return this.http.get<Collector[]>(url)
      .map((data) => {
        data.forEach((d) => this.collectors.push(
          new Collector(d.level, d.upgradeCostWood, d.upgradeCostGold, d.name, d.baseYield, d.levelGrowth, d.id)));
        return this.collectors;
      });
  }

  updateCollectors(collector: Collector): Observable<string> {
    const url = `${ this.urlAPIupdate }` + 'Collector/' + collector.id;
    return this.http.put(url, JSON.parse(JSON.stringify(collector)))
      .map(() => {
        return 'El colector ha sido actualizado correctamente';
      });
  }

  getMarket(): Observable<Market> {
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
  }

  getTownhall(): Observable<Townhall> {
    const url = `${ this.urlAPIupdate }` + 'Townhall/1';
    return this.http.get<Townhall>(url)
      .map((data) => {
        return new Townhall(data.level, data.upgradeCostWood, data.upgradeCostGold, data.name,
          data.baseResourceLimit, data.baseUnitLimit, data.levelResGrowth, data.levelUnitGrowth);
      });
  }

  updateTownhall(townhall: Townhall): Observable<string> {
    const url = `${ this.urlAPIupdate }` + 'Townhall/1';
    return this.http.put(url, JSON.parse(JSON.stringify(townhall)))
      .map(() => {
        return 'El ayuntamiento ha sido actualizado correctamente';
      });
  }

  getArmory(): Observable<Armory> {
    const url = `${ this.urlAPIupdate }` + 'Armory/1';
    return this.http.get<Armory>(url)
      .map((data) => {
        return new Armory(data.level, data.upgradeCostWood, data.upgradeCostGold);
      });
  }

  updateArmory(armory: Armory): Observable<string> {
    const url = `${ this.urlAPIupdate }` + 'Armory/1';
    console.log(armory);
    return this.http.put(url, JSON.parse(JSON.stringify(armory)))
      .map(() => {
        return 'La armeria ha sido actualizado correctamente';
      });
  }
  getArmy(): Observable<void> {
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
  }
}
