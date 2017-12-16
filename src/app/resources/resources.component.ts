import {Component, OnChanges, OnInit} from '@angular/core';
import {WoodService} from './WoodService';
import {MeatService} from './MeatService';
import {GoldService} from './GoldService';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent {
  recursos: number[]=[];
  constructor(private Wood: WoodService, private Meat: MeatService, private Gold: GoldService) {
    this.recursos.push(this.Wood.currentQuantity(), this.Meat.currentQuantity(), this.Gold.currentQuantity());
    this.Wood.woodObserver.subscribe((x)=>this.recursos[0]=x);
    this.Meat.meatObserver.subscribe((x)=>this.recursos[1]=x);
    this.Gold.goldObserver.subscribe((x)=>this.recursos[2]=x);
  }
}
