/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';

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
    this.Meat.quantity -= quantity;
  }
}
