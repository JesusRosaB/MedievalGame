/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TownhallService} from '../townhall/townhall.service';

@Injectable()
export class GoldService {
  Gold: Resources = new Resources(3, 'Oro', 500);
  constructor(private townhall: TownhallService) {}
  currentQuantity() {
    return this.Gold.quantity;
  }
  increase(quantity) {
    if (this.currentQuantity() + quantity > this.townhall.getTownhall().getResourceLimit()) {
      this.Gold.quantity += (this.townhall.getTownhall().getResourceLimit() - this.currentQuantity());
    }
    this.Gold.quantity += quantity;
  }
  spend(quantity) {
    if (this.Gold.quantity < quantity) {
      throw new Error('Oro');
    }
    else{
      this.Gold.quantity -= quantity;
    }
  }
  resource(): Resources {
    return this.Gold;
  }
  loose(quantity) {
    if (this.currentQuantity() < quantity) {
      this.Gold.quantity = 0;
    }
    else {
      this.Gold.quantity -= quantity;
    }
  }
}
