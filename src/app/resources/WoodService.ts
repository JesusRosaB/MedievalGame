import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class WoodService {
  private Wood: Resources = new Resources(1, 'Madera', 500);
  woodObserver = BehaviorSubject.create(this.Wood.quantity);
  currentQuantity() {
    console.log('Pidiendo recursos');
    return this.Wood.quantity;
  }
  increase(quantity) {
    console.log(this.currentQuantity());
    this.Wood.quantity += quantity;
    this.woodObserver.next(this.currentQuantity());
  }
  spend(quantity) {
    console.log(this.currentQuantity());
    this.Wood.quantity -= quantity;
    this.woodObserver.next(this.currentQuantity());

  }
  loose(quantity) {
    console.log(this.currentQuantity());
    if (this.currentQuantity() < quantity){
      this.Wood.quantity = 0;
    }
    else {
      this.Wood.quantity -= quantity;
    }
  }
}
