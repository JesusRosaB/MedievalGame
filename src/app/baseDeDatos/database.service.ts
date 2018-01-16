import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DatabaseService {
  /*urlAPI = 'https://5a246e553a6dd70012db4f81.mockapi.io/api/v1/';
  constructor(private http: HttpClient) {}
  get(objetos: string): Observable<any> {
    let url = `${ this.urlAPI }objetos`;
    return this.http.get<any>(url)
      .map((data: any) => {
        user.id = data.id;
        return 'Se ha creado un nuevo usuario';
      });
  }*/
}
