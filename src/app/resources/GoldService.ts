/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GoldService {
  Gold: Resources = new Resources(3, 'Oro', 500);
  goldObserver = BehaviorSubject.create(this.Gold.quantity);
  currentQuantity() {
    return this.Gold.quantity;
  }
  increase(quantity) {
    this.Gold.quantity += quantity;
    this.goldObserver.next(this.currentQuantity());
  }
  spend(quantity) {
    if (this.Gold.quantity < quantity) {
      throw new Error('madera');
    }
    else{
      this.Gold.quantity -= quantity;
      this.goldObserver.next(this.Gold.quantity);
    }
  }
  loose(quantity) {
    if (this.currentQuantity() < quantity){
      this.Gold.quantity = 0;
    }
    else {
      this.Gold.quantity -= quantity;
    }
  }
}
