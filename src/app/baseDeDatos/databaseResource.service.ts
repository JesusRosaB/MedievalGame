import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Resources} from '../resources/resources';
import {DatabaseService} from './database.service';

export interface ResourcesManagement {
  getResource(id): Observable<Resources>;
  updateResource(resource: Resources): Observable<void>;
}

@Injectable()
export class DatabaseResourceService implements ResourcesManagement{
  urlAPIupdate = 'https://5a65b167acd74f00128c607d.mockapi.io/Resource';
  constructor(private databaseService: DatabaseService) {}
  getResource(id): Observable<Resources> {
    return Observable.create((observer) => {
      observer.next(
        this.databaseService.getOne(this.urlAPIupdate, id).subscribe((data) => {
          return data;
        })
      );
    });
  }
  updateResource(resource: Resources): Observable<void> {
    return Observable.create(() => {
      this.databaseService.update(this.urlAPIupdate, 1, resource).subscribe();
    });
  }
}
