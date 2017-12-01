

import {Injectable, OnInit} from '@angular/core';
import {ResourcesManage} from './resources';

@Injectable()
export class WoodService implements ResourcesManage, OnInit {
  Wood: number;
  currentQuantity() {
    return this.Wood;
  }
  increase(quantity) {
    this.Wood += quantity;
  }
  spend(quantity) {
    this.Wood -= quantity;
  }
  ngOnInit() {
    this.Wood = 500;
  }
}
