import {Injectable, OnChanges, OnInit, Output} from '@angular/core';
import {Resources} from './resources';
@Injectable()
export class WoodService implements OnInit, OnChanges {
  Wood: Resources;
  currentQuantity() {
    return this.Wood.quantity;
  }
  increase(quantity) {
    this.Wood.quantity += quantity;
  }
  spend(quantity) {
    this.Wood.quantity -= quantity;
  }
  ngOnInit() {
    this.Wood = new Resources(1, 'Madera', 500);
  }
  ngOnChanges() {
    Rx.Observable.next(this.Wood);

  }
}
