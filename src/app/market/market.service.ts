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
    let price: number = this.market.purchaseValue[0];
    try {
      this.gold.spend(price);
    } catch (e) { throw new Error('Oro insuficiente.'); }
    this.wood.increase(quantity);
  }

  buyMeat(quantity: number) : void {
    let price: number = this.market.purchaseValue[1];
    try {
      this.gold.spend(price);
    } catch (e) { throw new Error('Oro insuficiente.'); }
    this.meat.increase(quantity);
  }

  sellWood(quantity: number) : void {
    let price: number = this.market.saleValue[0];
    try {
      this.wood.spend(quantity);
    } catch (e) { throw new Error('Madera insuficiente.'); }
    this.gold.increase(price);
  }

  sellMeat(quantity: number) : void {
    let price: number = this.market.saleValue[1];
    try {
      this.meat.spend(quantity);
    } catch (e) { throw new Error('Carne insuficiente.'); }
    this.gold.increase(price);
    }
  }
}
