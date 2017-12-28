import {Injectable, OnInit} from '@angular/core';
import {WoodService} from '../resources/WoodService';
import {timerService} from '../Timer/timer.service';
/**
 * Created by jose on 16/12/17.
 */

@Injectable()
export class WoodCutterService implements OnInit {
  woodPerSecond;
  constructor(private Wood: WoodService, private timer: timerService) {
    this.woodPerSecond = 1;
    this.timer.resourcesTimer.subscribe((x) => this.Wood.increase(this.woodPerSecond));
  }
  ngOnInit() {

  }
}
