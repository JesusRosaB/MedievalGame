/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class MeatService {
  Meat: Resources = new Resources(2, 'Carne', 500);
  meatObserver= Observable.create((observer) => {
    function change() {
      observer.next(this.currentQuantity());
    }
  });
  currentQuantity() {
    return this.Meat.quantity;
  }
  increase(quantity) {
    this.Meat.quantity += quantity;
    this.meatObserver.change();
  }
  spend(quantity) {
    this.Meat.quantity -= quantity;
    this.meatObserver.change();
  }
}
