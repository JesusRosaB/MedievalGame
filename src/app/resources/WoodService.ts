import {Injectable, OnChanges, OnInit, Output} from '@angular/core';
import {Resources} from './resources';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WoodService {
  private Wood: Resources = new Resources(1, 'Madera', 500);
  currentQuantity() {
    return this.Wood.quantity;
  }
  increase(quantity) {
    this.Wood.quantity += quantity;
    console.log("Llego increase");
    this.woodObserver.change();

  }
  spend(quantity) {
    this.Wood.quantity -= quantity;
    this.woodObserver.change();
  }

  woodObserver= Observable.create((observer)=>{
    function change() {
      console.log("Llego change");
      observer.next(this.currentQuantity());
    }
  });
}
