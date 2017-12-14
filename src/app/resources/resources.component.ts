import {Component, OnChanges, OnInit} from '@angular/core';

import {Resources} from './resources';
import {WoodService} from './WoodService';
import {MeatService} from './MeatService';
import {GoldService} from './GoldService';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})


export class ResourcesComponent implements OnInit {
  recursos: number[];
  constructor(private Wood: WoodService, private Meat: MeatService, private Gold: GoldService) {}
  ngOnInit() {
    this.recursos[0] = this.Wood.currentQuantity();
    this.recursos[1] = this.Meat.currentQuantity();
    this.recursos[2] = this.Gold.currentQuantity();
  }

  Actualizar() {
    this.recursos[0] = this.Wood.currentQuantity();
    this.recursos[1] = this.Meat.currentQuantity();
    this.recursos[2] = this.Gold.currentQuantity();
  }
}
