import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {WoodService} from './WoodService';
import {MeatService} from './MeatService';
import {GoldService} from './GoldService';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit, DoCheck {
  recursos: number[] = [];
  constructor(private Wood: WoodService, private Meat: MeatService, private Gold: GoldService) {
    /*Wood.woodObserver.subscribe(x => this.recursos[0] = x);
    Meat.meatObserver.subscribe(x => this.recursos[1] = x);
    Gold.goldObserver.subscribe(x => this.recursos[2] = x);*/
    // console.log('Llego componente recursos');
  }
  ngOnInit() {
    this.recursos.push(this.Wood.currentQuantity(), this.Meat.currentQuantity(), this.Gold.currentQuantity());
  }
  ngDoCheck() {
    if (this.recursos[0] !== this.Wood.currentQuantity()) {
      this.recursos[0] = this.Wood.currentQuantity();
    }
    if (this.recursos[1] !== this.Meat.currentQuantity()) {
      this.recursos[1] = this.Meat.currentQuantity();
    }
    if (this.recursos[2] !== this.Gold.currentQuantity()) {
      this.recursos[2] = this.Gold.currentQuantity();
    }
  }
}
