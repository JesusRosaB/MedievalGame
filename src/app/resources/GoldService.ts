/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GoldService {
  Gold: Resources = new Resources(3, 'Oro', 500);
  goldObserver= BehaviorSubject.create(this.Gold.quantity);
  currentQuantity() {
    return this.Gold.quantity;
  }
  increase(quantity) {
    this.Gold.quantity += quantity;
    this.goldObserver.next(this.currentQuantity());
  }
  spend(quantity) {
    this.Gold.quantity -= quantity;
    this.goldObserver.next(this.currentQuantity());
  }
}
