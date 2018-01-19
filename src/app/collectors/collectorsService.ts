import {Injectable} from '@angular/core';
import {WoodService} from '../resources/WoodService';
import {TimerService} from '../timer/timer.service';
import {Collector} from '../buildings/Collector';
import {MeatService} from '../resources/MeatService';
import {GoldService} from '../resources/GoldService';
import {LevelUpBuildingService} from '../buildings/levelUpBuilding.service';
import {DatabaseService} from '../baseDeDatos/database.service';
/**
 * Created by jose on 16/12/17.
 */

@Injectable()
export class CollectorsService {
  private collectors: Collector[] = [];
  constructor(private Wood: WoodService, private Meat: MeatService, private Gold: GoldService,
  private levelup: LevelUpBuildingService, private timer: TimerService, private database: DatabaseService) {
    /*this.collectors.push(
      new Collector(1, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 'woodCutterHouse', 1, 1),
      new Collector(1, [1], [1], 'butcherHouse', 1, 1),
      new Collector(1, [1], [1], 'goldMine', 1, 1)
    );*/
    this.database.getCollectors().subscribe((collectors) => this.collectors = collectors);
    this.timer.resourcesTimer.subscribe(() => this.Wood.increase(this.collectors[0].yieldValue()));
    this.timer.resourcesTimer.subscribe(() => this.Meat.increase(this.collectors[1].yieldValue()));
    this.timer.resourcesTimer.subscribe(() => this.Gold.increase(this.collectors[2].yieldValue()));
  }
  getCollectors() {
    return this.collectors;
  }
  levelUpCollector(collector: Collector) {
    this.levelup.levelUp(collector);
  }
}
