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

export interface Observer {
  actualizar();
}

@Injectable()
export class CollectorsService {
  private collectors: Collector[] = [];
  constructor(private Wood: WoodService, private Meat: MeatService, private Gold: GoldService,
  private levelup: LevelUpBuildingService, private timer: TimerService, private databaseCollector: DatabaseService) {
    this.databaseCollector.getCollectors().subscribe((collectors) => {
      collectors.forEach((c) => this.collectors.push(c));
    });
    this.timer.addObserver(this);
  }
  getCollectors() {
    return this.collectors;
  }
  levelUpCollector(collector) {
    this.levelup.levelUp(collector);
  }
  yieldValue(collector): number {
    return collector.baseYield * collector.level;
  }
  actualizar() {
    this.Wood.increase(this.yieldValue(this.collectors[0]));
    this.Meat.increase(this.yieldValue(this.collectors[1]));
    this.Gold.increase(this.yieldValue(this.collectors[2]));
  }
}
