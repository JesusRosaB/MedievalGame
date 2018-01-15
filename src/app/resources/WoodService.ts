import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {TownhallService} from '../townhall/townhall.service';

@Injectable()
export class WoodService {
  private Wood: Resources = new Resources(1, 'Madera', 500);
  constructor(private townhall: TownhallService) {}
  currentQuantity() {
    return this.Wood.quantity;
  }
  increase(quantity) {
    if (this.currentQuantity() + quantity > this.townhall.getTownhall().getResourceLimit()) {
      this.Wood.quantity += (this.townhall.getTownhall().getResourceLimit() - this.currentQuantity());
    }
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
