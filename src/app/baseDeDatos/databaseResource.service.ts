import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Resources} from '../resources/resources';
import {DatabaseService} from './database.service';

@Injectable()
export class DatabaseResourceService {
  urlAPIupdate = 'https://5a65b167acd74f00128c607d.mockapi.io/Resource';
  resources: Resources[] = [
    {id: 1, name: 'Wood', quantity: 500},
    {id: 2, name: 'Meat', quantity: 500},
    {id: 3, name: 'Gold', quantity: 500}
  ]
  constructor(private databaseService: DatabaseService) {}
  getResource(id): Observable<Resources> {
    return Observable.create((observer) => {
      this.databaseService.getOne(this.urlAPIupdate, id).subscribe((data) => {
        this.resources[id - 1].quantity = data.quantity;
      });
      observer.next(this.resources[id - 1]);
    });
  }
  updateResource(resource: Resources): Observable<void> {
    return Observable.create(() => {
      this.databaseService.update(this.urlAPIupdate, resource.id, resource).subscribe();
    });
  }
}
