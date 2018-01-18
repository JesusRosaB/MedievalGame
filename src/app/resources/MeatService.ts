/**
 * Created by jose on 13/12/17.
 */
import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TownhallService} from '../townhall/townhall.service';
@Injectable()
export class MeatService {
  Meat: Resources = new Resources(2, 'Carne', 500);
  constructor(private townhall: TownhallService) {}
  currentQuantity() {
    return this.Meat.quantity;
  }
  increase(quantity) {
    if (this.currentQuantity() + quantity > this.townhall.getTownhall().getResourceLimit()) {
      this.Meat.quantity += (this.townhall.getTownhall().getResourceLimit() - this.currentQuantity());
    }
    this.Meat.quantity += quantity;
  }
  spend(quantity) {
    if (this.Meat.quantity < quantity) {
      throw new Error('Carne');
    }
    else{
      this.Meat.quantity -= quantity;
    }
  }

  resource(): Resources {
    return this.Meat;
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
