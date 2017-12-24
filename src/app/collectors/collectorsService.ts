import {Injectable, OnInit} from '@angular/core';
import {WoodService} from '../resources/WoodService';
import {TimerService} from '../Timer/timer.service';
import {Collector} from './Collector';
/**
 * Created by jose on 16/12/17.
 */

@Injectable()
export class CollectorsService implements OnInit{
  woodPerSecond;
  private collectors: Collector[] = [];
  constructor(private Wood: WoodService, private timer: TimerService) {
    this.woodPerSecond = 1;
    console.log('Servicio recolector');
    this.timer.resourcesTimer.subscribe(() => this.Wood.increase(this.woodPerSecond));
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
