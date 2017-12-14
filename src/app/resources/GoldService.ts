/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';

@Injectable()
export class GoldService {
  Gold: Resources = new Resources(3, 'Oro', 500);
  currentQuantity() {
    return this.Gold.quantity;
  }
  increase(quantity) {
    this.Gold.quantity += quantity;
  }
  spend(quantity) {
    this.Gold.quantity -= quantity;
  }
}
