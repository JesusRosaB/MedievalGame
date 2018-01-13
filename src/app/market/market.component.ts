import { Component, OnInit } from '@angular/core';
import { Market } from '../market';
import { MarketService } from "./MarketService";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
})
export class MarketComponent implements OnInit {
  marketService :MarketService;
  prices: number[];

  constructor(marketService: MarketService) {
    this.prices = [marketService.getResourcePurchasePrice[0], marketService.getResourcePurchasePrice[1],
    marketService.getResourceSalePrice[0], marketService.getResourceSalePrice[1]];
  }

  ngOnInit() {
    this.prices = [this.marketService.getResourcePurchasePrice[0], this.marketService.getResourcePurchasePrice[1],
    this.marketService.getResourceSalePrice[0], this.marketService.getResourceSalePrice[1]];
  }

}
