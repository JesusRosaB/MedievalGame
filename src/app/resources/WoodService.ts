import {Injectable, OnChanges, OnInit, Output} from '@angular/core';
import {Resources} from './resources';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class WoodService {
  private Wood: Resources = new Resources(1, 'Madera', 500);
  woodObserver = BehaviorSubject.create(this.Wood.quantity);
  /*Observable.create((observer) => {
      console.log('Llego change');
      observer.next(this.currentQuantity());
  });*/
  currentQuantity() {
    return this.Wood.quantity;
  }
  increase(quantity) {
    this.Wood.quantity += quantity;
    console.log('Llego increase');
    this.woodObserver.next(this.currentQuantity());
  }
  spend(quantity) {
    this.Wood.quantity -= quantity;
    this.woodObserver.next(this.currentQuantity());
  }
}
