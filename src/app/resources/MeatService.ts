/**
 * Created by jose on 13/12/17.
 */
import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {TownhallService} from '../townhall/townhall.service';
import {DatabaseService} from '../baseDeDatos/database.service';
@Injectable()
export class MeatService {
  Meat: Resources;
  constructor(private townhall: TownhallService, private databaseResource: DatabaseService) {
    this.databaseResource.getResource(2).subscribe((resource) => this.Meat = resource);
  }
  currentQuantity() {
    return this.Meat.quantity;
  }
  increase(quantity) {
    if (this.currentQuantity() + quantity > this.townhall.getResourceLimit()) {
      this.Meat.quantity += (this.townhall.getResourceLimit() - this.currentQuantity());
    }
    this.Meat.quantity += quantity;
  }
  spend(quantity) {
    if (this.Meat.quantity < quantity) {
      throw new Error('Carne');
    }
    else{
      this.Meat.quantity -= quantity;
    }
  }

  resource(): Resources {
    return this.Meat;
  }

  loose(quantity) {
    if (this.currentQuantity() < quantity) {
      this.Meat.quantity = 0;
    }
    else {
      this.Meat.quantity -= quantity;
    }
  }
}
