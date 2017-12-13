/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';

@Injectable()
export class MeatService implements OnInit {
  Meat:Resources;
  currentQuantity(){
    return this.Meat.quantity;
  }
  increase(quantity) {
    this.Meat.quantity += quantity;
  }
  spend(quantity) {
    this.Meat.quantity -= quantity;
  }
  ngOnInit() {
    this.Meat=new Resources(1,'Madera',500);
  }
}
