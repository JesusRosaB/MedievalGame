import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class WoodService {
  private Wood: Resources = new Resources(1, 'Madera', 500);
  woodObserver = BehaviorSubject.create(this.Wood.quantity);
  currentQuantity() {
    return this.Wood.quantity;
  }
  increase(quantity) {
    this.Wood.quantity += quantity;
    this.woodObserver.next(this.currentQuantity());
  }
  spend(quantity) {
    console.log(this.currentQuantity());
    if (this.Wood.quantity < quantity) {
      throw new Error('No hay suficiente madera');
    }
    else{
      this.Wood.quantity -= quantity;
      this.woodObserver.next(this.Wood.quantity);
    }
  }
  loose(quantity) {
    if (this.Wood.quantity < quantity) {
      this.Wood.quantity = 0;
      console.log(this.currentQuantity());
    }
    else {
      this.Wood.quantity -= quantity;
    }
  }
}
