import {Injectable, OnChanges, OnInit, Output} from '@angular/core';
import {Resources} from './resources';
import {Observable} from "rxjs/Observable";
@Injectable()
export class WoodService {
  Wood: Resources = new Resources(1, 'Madera', 500);
  currentQuantity() {
    return this.Wood.quantity;
  }
  increase(quantity) {
    this.Wood.quantity += quantity;
  }
  spend(quantity) {
    this.Wood.quantity -= quantity;
  }

  woodObserver=Observable.create((observer)=>{
    observer.ngOnChanges(this.Wood);
  })
}
