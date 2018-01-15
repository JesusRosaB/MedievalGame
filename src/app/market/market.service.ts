import { Injectable } from '@angular/core';
import { WoodService } from '../resources/WoodService';
import { MeatService } from '../resources/MeatService';
import { GoldService } from '../resources/GoldService';
import { Market } from '../buildings/market';

@Injectable()
export class MarketService {
  market: Market;

  constructor(private wood: WoodService, private meat: MeatService, private gold: GoldService) {
    this.market = new Market(1, [1000], [500], [2, 2], [0.5, 0.5], 0.1);
  }

  getResourcePurchasePrice(resource_id: number): number {
    return this.market.getPurchasePrices()[resource_id];
  }

  getResourceSalePrice(resource_id: number): number {
    return this.market.getSalePrices()[resource_id];
  }

  buyWood(quantity: number): void {
    let price: number = this.market.getPurchasePrices()[0] * quantity;
    try {
      this.gold.spend(price);
    } catch (e) { throw new Error('Oro insuficiente.'); }
    this.wood.increase(quantity);
  }

  buyMeat(quantity: number): void {
    let price: number = this.market.getPurchasePrices()[1] * quantity;
    try {
      this.gold.spend(price);
    } catch (e) { throw new Error('Oro insuficiente.'); }
    this.meat.increase(quantity);
  }

  sellWood(quantity: number): void {
    let price: number = this.market.getSalePrices()[0] * quantity;
    try {
      this.wood.spend(quantity);
    } catch (e) { throw new Error('Madera insuficiente.'); }
    this.gold.increase(price);
  }

  sellMeat(quantity: number): void {
    let price: number = this.market.getSalePrices()[1];
    try {
      this.meat.spend(quantity);
    } catch (e) { throw new Error('Carne insuficiente.'); }
    this.gold.increase(price);
    }
}

