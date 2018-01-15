import { Component, OnInit, DoCheck } from '@angular/core';
import { Market } from '../buildings/market';
import { MarketService } from "./market.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  providers: [ MarketService ],
})
export class MarketComponent implements OnInit, DoCheck {
  purchasePrices: number[];
  salePrices: number[];

  constructor(private marketService: MarketService) { }

  ngOnInit() {
    this.purchasePrices = [this.marketService.getResourcePurchasePrice(0), this.marketService.getResourcePurchasePrice(1)];
    this.salePrices = [this.marketService.getResourceSalePrice(0), this.marketService.getResourceSalePrice(1)];
  }

  ngDoCheck() {
    if (this.purchasePrices[0] !== this.marketService.getResourcePurchasePrice(0)) {
      this.purchasePrices[0] = this.marketService.getResourcePurchasePrice(0);
    }
    if (this.purchasePrices[1] !== this.marketService.getResourcePurchasePrice(1)) {
      this.purchasePrices[1] = this.marketService.getResourcePurchasePrice(1);
    }
    if (this.salePrices[0] !== this.marketService.getResourceSalePrice(0)) {
      this.salePrices[0] = this.marketService.getResourceSalePrice(0);
    }
    if (this.salePrices[1] !== this.marketService.getResourceSalePrice(1)) {
      this.salePrices[1] = this.marketService.getResourceSalePrice(1);
    }
  }

  buyWood(quantity: number): void {
    this.marketService.buyWood(quantity);
  }

  buyMeat(quantity: number) {
    this.marketService.buyMeat(quantity);
  }

  sellWood(quantity: number) {
    this.marketService.sellWood(quantity);
  }

  sellMeat(quantity: number) {
    this.marketService.sellMeat(quantity);
  }
}
