import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Collector} from '../buildings/Collector';

@Injectable()
export class DatabaseService {
  urlAPI = 'https://5a60754811654a0012d3012f.mockapi.io/';
  constructor(private http: HttpClient) {}
  /*get(objetos: string): Observable<any> {
    let url = `${ this.urlAPI }objetos`;
    return this.http.get<any>(url)
      .map((data: any) => {
        user.id = data.id;
        return 'Se ha creado un nuevo usuario';
      });
  }*/
  getCollectors(): Observable<Collector[]> {
    const url = `${ this.urlAPI }` + 'Collector';
    // let collectors: Collector[] = [];
    return this.http.get<Collector[]>(url).pipe();
      /*.map((data) => {
        collectors = data;
        return collectors;
      });*/
  }
}
