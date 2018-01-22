import { Injectable } from '@angular/core';
import { WoodService } from '../resources/WoodService';
import { MeatService } from '../resources/MeatService';
import { GoldService } from '../resources/GoldService';
import { Market } from '../buildings/market';
import {Resources} from '../resources/resources';
import {DatabaseService} from '../baseDeDatos/database.service';

@Injectable()
export class MarketService {
  market: Market;

  constructor(private wood: WoodService, private meat: MeatService, private gold: GoldService, private databaseService: DatabaseService) {
    this.databaseService.getMarket().subscribe((m) => this.market = m);
  }

  getResourcePurchasePrice(resource) {
    return this.market.basePurchasePrice[resource];
  }
  getResourceSalePrice(resource) {
    return this.market.baseSalePrices[resource];
  }
  getPurchasePrices(): number[] {
    let truePrices: number[] = this.market.basePurchasePrice;
    for (let i: number = 0; i < truePrices.length; i++) {
      truePrices[i] *= this.market.saleMod[i];
    }
    return truePrices;
    /*
      this.truePrices = this.basePurchasePrice;
      for (let i: number = 0; i < this.truePrices.length; i++){
        console.log(this.levelGrowth);
        this.truePrices[i] = this.truePrices[i] * (1 - (this.levelGrowth * (2)));//this.level - 1)));
          this.truePrices[i] *= this.purchaseMod[i];
      }
      return this.truePrices;*/
  }
  getSalePrices(): number[] {
    let truePrices :number[] = this.market.baseSalePrices;
    for (let i: number = 0; i < truePrices.length; i++) {
      truePrices[i] *= this.market.saleMod[i];
    }
    return truePrices;
  }

  buyWood(quantity: number): void {
    let price: number = this.getPurchasePrices()[0] * quantity;
    try {
      this.gold.spend(price);
    } catch (e) { throw new Error('Oro insuficiente.'); }
    this.wood.increase(quantity);
  }

  buyMeat(quantity: number): void {
    let price: number = this.getPurchasePrices()[1] * quantity;
    try {
      this.gold.spend(price);
    } catch (e) { throw new Error('Oro insuficiente.'); }
    this.meat.increase(quantity);
  }

  sellWood(quantity: number): void {
    let price: number = this.getSalePrices()[0] * quantity;
    try {
      this.wood.spend(quantity);
    } catch (e) { throw new Error('Madera insuficiente.'); }
    this.gold.increase(price);
  }

  sellMeat(quantity: number): void {
    let price: number = this.getSalePrices()[1] * quantity;
    try {
      this.meat.spend(quantity);
    } catch (e) { throw new Error('Carne insuficiente.'); }
    this.gold.increase(price);
    }

  purchaseValue(amount: number, res: Resources): number {
    return this.getPurchasePrices()[res.id] * amount;
  }

  saleValue(amount: number, res: Resources): number {
    return this.getSalePrices()[res.id] * amount;
  }


  applyPurchaseMod(mods: number[], time: number) {
    for (let i: number = 0; i < mods.length; i++) {
      this.market.purchaseMod[i] *= mods[i];
    }
    // TODO: Convertir a función asíncrona que espere a que pase el tiempo.
    for (let i: number = 0; i < mods.length; i++) {
      this.market.purchaseMod[i] /= mods[i];
    }
  }

  applySaleMod(mods: number[], time: number) {
    for (let i: number = 0; i < mods.length; i++) {
      this.market.saleMod[i] *= mods[i];
    }
    // TODO: Convertir a función asíncrona que espere a que pase el tiempo.
    for (let i: number = 0; i < mods.length; i++) {
      this.market.saleMod[i] /= mods[i];
    }
  }
}

