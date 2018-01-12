import { Injectable } from '@angular/core';
import { WoodService } from '../resources/WoodService';
import { MeatService } from '../resources/MeatService';
import { GoldService } from '../resources/GoldService';
import { Market } from '../market';

@Injectable()
export class MarketService {
  market: Market;

  constructor(private wood: WoodService, private meat: MeatService, private gold: GoldService, private m: Market) {
    this.market = new Market(1, 1000, [0.5, 0.5], [0.5, 0.5], 0.1);
  }

  getResourcePurchasePrice(resource_id :number) :number {
    return this.market.getPurchasePrices[resource_id];
  }

  getResourceSalePrice(resource_id: number): number {
    return this.market.getSalePrices[resource_id];
  }

  buyWood(quantity: number): void {
    let price :number = this.market.purchaseValue[0];
    if (this.gold.currentQuantity() > price) {
      this.gold.spend(price);
      this.wood.increase(quantity);
    }
  }

  buyMeat(quantity: number) {
    let price: number = this.market.purchaseValue[1];
    if (this.gold.currentQuantity() > price) {
      this.gold.spend(price);
      this.meat.increase(quantity);
    }
  }

  sellWood(quantity: number) {
    let price: number = this.market.saleValue[0];  
    if (this.wood.currentQuantity() > quantity) {
      this.wood.spend(quantity);
      this.gold.increase(price);
    }
  }

  sellMeat(quantity: number) {
    let price: number = this.market.saleValue[1];
    if (this.meat.currentQuantity() > quantity) {
      this.meat.spend(quantity);
      this.gold.increase(price);
    }
  }

}
