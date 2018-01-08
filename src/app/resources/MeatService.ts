/**
 * Created by jose on 13/12/17.
 */
import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class MeatService {
  Meat: Resources = new Resources(2, 'Carne', 500);
  meatObserver= BehaviorSubject.create(this.Meat.quantity);
  currentQuantity() {
    return this.Meat.quantity;
  }
  increase(quantity) {
    this.Meat.quantity += quantity;
    this.meatObserver.next(this.currentQuantity());
  }
  spend(quantity) {
    this.Meat.quantity -= quantity;
    this.meatObserver.next(this.currentQuantity());
  }

  loose(quantity) {
    if (this.currentQuantity() < quantity){
      this.Meat.quantity = 0;
    }
    else {
      this.Meat.quantity -= quantity;
    }
  }
}
