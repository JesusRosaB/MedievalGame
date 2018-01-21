import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Resources} from '../resources/resources';
import {Collector} from '../buildings/Collector';

@Injectable()
export class DatabaseService {
  urlAPI = 'https://5a60754811654a0012d3012f.mockapi.io/';
  resource: Resources;
  collectors: Collector[] = [];
  constructor(private http: HttpClient) {}
  getWood() {
    return this.getResource(1).subscribe(() => {
      return this.resource;
    });
  }
  getResource(id): Observable<Resources> {
    const url = `${ this.urlAPI }` + 'Resource/' + id;
    return this.http.get<Resources>(url)
      .map((data) => {
        this.resource = new Resources(data.id, data.name, data.quantity);
        return this.resource;
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
}
