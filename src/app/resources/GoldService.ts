/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';

@Injectable()
export class GoldService implements OnInit {
  Gold:Resources;
  currentQuantity(){
    return this.Gold.quantity;
  }
  increase(quantity) {
    this.Gold.quantity += quantity;
  }
  spend(quantity) {
    this.Gold.quantity -= quantity;
  }
  ngOnInit() {
    this.Gold=new Resources(1,'Madera',500);
  }
}
