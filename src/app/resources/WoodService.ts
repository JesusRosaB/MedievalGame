import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class WoodService {
  private Wood: Resources = new Resources(1, 'Madera', 500);
  currentQuantity() {
    return this.Wood.quantity;
  }
  increase(quantity) {
    this.Wood.quantity += quantity;
  }
  spend(quantity) {
    if (this.Wood.quantity < quantity) {
      throw new Error('madera');
    }
    else{
      this.Wood.quantity -= quantity;
    }
  }
  loose(quantity) {
    if (this.Wood.quantity < quantity) {
      this.Wood.quantity = 0;
    }
    else {
      this.Wood.quantity -= quantity;
    }
  }
}
