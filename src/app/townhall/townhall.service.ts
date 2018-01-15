import {Injectable} from '@angular/core';
import {Building} from '../buildings/building';
import {WoodService} from '../resources/WoodService';
import {GoldService} from '../resources/GoldService';
import {Townhall} from '../buildings/townhall';
import {Collector} from '../buildings/Collector';
import {Armory} from '../buildings/armory';
import {Market} from '../buildings/market';

@Injectable()
export class TownhallService {
  edificios: Building[] = [];
  // collectors: Collector[] = [];
  townhall: Townhall = new Townhall(1, [1], [1], 'Ayuntamiento',
    1000, 1000, 1000, 200);
  constructor(private wood: WoodService, private gold: GoldService) {
    this.edificios.push(
      new Collector(1, [1], [1], 'woodCutterHouse', 1, 1),
      new Collector(1, [1], [1], 'butcherHouse', 1, 1),
      new Collector(1, [1], [1], 'goldMine', 1, 1),
      new Armory(1, [400], [400]),
      new Market(1, [1000], [500], [2, 2], [0.5, 0.5], 0.1)
    );
  }
  levelUp(building: Building) {
    const index = this.edificios.indexOf(building);
    try {
      this.wood.spend(this.edificios[index].levelCostWood());
      this.gold.spend(this.edificios[index].levelCostGold());
      this.edificios[index].levelUp();
    } catch (e) {
      throw new Error('No se pudo aumentar el nivel del edificio por falta de recursos de ' + e.message);
    }
  }
  getCollectors() {
    console.log(this.edificios.filter(() => this.edificios instanceof Collector));
    return this.edificios.filter(() => typeof this.edificios === typeof Collector) as Collector[];
  }
  getArmory() {
    return this.edificios.find(() => this.edificios instanceof Armory) as Armory;
  }
  getMarket() {
    return this.edificios.find(() =>  this.edificios instanceof Market) as Market;
  }
  getBuilding() {
    return this.edificios;
  }
}
