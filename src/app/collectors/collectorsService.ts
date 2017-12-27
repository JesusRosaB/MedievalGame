import {Injectable, OnInit} from '@angular/core';
import {WoodService} from '../resources/WoodService';
import {TimerService} from '../Timer/timer.service';
import {Collector} from './Collector';
import {MeatService} from '../resources/MeatService';
import {GoldService} from '../resources/GoldService';
/**
 * Created by jose on 16/12/17.
 */

@Injectable()
export class CollectorsService implements OnInit{
  woodPerSecond;
  meatPerSecond;
  goldPerSecond;
  private collectors: Collector[] = [];
  constructor(private Wood: WoodService, private Meat: MeatService, private Gold: GoldService, private timer: TimerService) {
    this.woodPerSecond = 1;
    this.meatPerSecond = 1;
    this.goldPerSecond = 1;
    this.timer.resourcesTimer.subscribe(() => this.Wood.increase(this.woodPerSecond));
    this.timer.resourcesTimer.subscribe(() => this.Meat.increase(this.meatPerSecond));
    this.timer.resourcesTimer.subscribe(() => this.Gold.increase(this.goldPerSecond));
  }
  getCollectors() {
    return this.collectors;
  }
  ngOnInit() {
    this.collectors.push(
      new Collector(1, 1, 'woodCutterHouse', 1, 1),
      new Collector(1, 1, 'butcherHouse', 1, 1),
      new Collector(1, 1, 'goldMine', 1, 1)
    );
  }
}
