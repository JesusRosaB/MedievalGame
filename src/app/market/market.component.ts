import { Component, OnInit } from '@angular/core';
import { Market } from '../market';
import { MarketService } from "./market.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  providers: [ MarketService ],
})
export class MarketComponent implements OnInit {
  prices: number[];

  constructor(private marketService: MarketService) { }

  ngOnInit() {
    this.prices = [this.marketService.getResourcePurchasePrice[0], this.marketService.getResourcePurchasePrice[1],
    this.marketService.getResourceSalePrice[0], this.marketService.getResourceSalePrice[1]];
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
