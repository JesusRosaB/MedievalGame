import {Injectable} from '@angular/core';
import {Resources} from './resources';
import {TownhallService} from '../townhall/townhall.service';
import {DatabaseResourceService} from '../baseDeDatos/databaseResource.service';

@Injectable()
export class WoodService {
  private Wood: Resources;
  constructor(private townhall: TownhallService, private databaseResource: DatabaseResourceService) {
    this.databaseResource.getResource(1).subscribe((data) => {
      this.Wood = data;
    });
  }
  currentQuantity() {
    return this.Wood.quantity;
  }
  increase(quantity) {
    if (this.currentQuantity() + quantity > this.townhall.getResourceLimit()) {
      this.Wood.quantity += (this.townhall.getResourceLimit() - this.currentQuantity());
    }
    this.Wood.quantity += quantity;
  }
  spend(quantity) {
    if (this.Wood.quantity < quantity) {
      throw new Error('Madera');
    }
    else{
      this.Wood.quantity -= quantity;
    }
  }

  resource(): Resources {
    return this.Wood;
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
