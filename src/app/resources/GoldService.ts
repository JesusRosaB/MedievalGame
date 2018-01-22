/**
 * Created by jose on 13/12/17.
 */
import {Injectable, OnInit} from '@angular/core';
import {Resources} from './resources';
import {TownhallService} from '../townhall/townhall.service';
import {DatabaseService} from '../baseDeDatos/database.service';

@Injectable()
export class GoldService {
  Gold: Resources;
  constructor(private townhall: TownhallService, private databaseResource: DatabaseService) {
    this.databaseResource.getResource(3).subscribe((resource) => this.Gold = resource);
  }
  currentQuantity() {
    return this.Gold.quantity;
  }
  increase(quantity) {
    if (this.currentQuantity() + quantity > this.townhall.getResourceLimit()) {
      this.Gold.quantity += (this.townhall.getResourceLimit() - this.currentQuantity());
    }
    this.Gold.quantity += quantity;
  }
  spend(quantity) {
    if (this.Gold.quantity < quantity) {
      throw new Error('Oro');
    }
    else{
      this.Gold.quantity -= quantity;
    }
  }
  resource(): Resources {
    return this.Gold;
  }
  loose(quantity) {
    if (this.currentQuantity() < quantity) {
      this.Gold.quantity = 0;
    }
    else {
      this.Gold.quantity -= quantity;
    }
  }
}
