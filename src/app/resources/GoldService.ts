/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';
import {Observable} from "rxjs/Observable";

@Injectable()
export class GoldService {
  Gold: Resources = new Resources(3, 'Oro', 500);
  currentQuantity() {
    return this.Gold.quantity;
  }
  increase(quantity) {
    this.Gold.quantity += quantity;
    this.goldObserver.change();
  }
  spend(quantity) {
    this.Gold.quantity -= quantity;
    this.goldObserver.change();
  }

  goldObserver= Observable.create((observer)=>{
    function change() {
      observer.next(this.currentQuantity());
    }
  });
}
