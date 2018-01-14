/**
 * Created by jose on 13/12/17.
 */
import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class MeatService {
  Meat: Resources = new Resources(2, 'Carne', 500);
  currentQuantity() {
    return this.Meat.quantity;
  }
  increase(quantity) {
    this.Meat.quantity += quantity;
  }
  spend(quantity) {
    if (this.Meat.quantity < quantity) {
      throw new Error('madera');
    }
    else{
      this.Meat.quantity -= quantity;
    }
  }

  loose(quantity) {
    if (this.currentQuantity() < quantity) {
      this.Meat.quantity = 0;
    }
    else {
      this.Meat.quantity -= quantity;
    }
  }
}
