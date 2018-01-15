import {Injectable} from '@angular/core';
import {WoodService} from '../resources/WoodService';
import {GoldService} from '../resources/GoldService';
import {Townhall} from '../buildings/townhall';
import {Building} from '../buildings/building';

@Injectable()
export class TownhallService {
  townhall: Townhall = new Townhall(1, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 'Ayuntamiento',
    1000, 1000, 1000, 200);
  constructor(private wood: WoodService, private gold: GoldService) {}
  buildingLevelUp(building: Building) {
    if (!building.levelUpPosible()) {
      throw new Error('Edificio al nivel maximo');
    }
    if (building === this.townhall || this.townhall.getLevel() > building.getLevel()){
      try {
        this.wood.spend(building.levelCostWood());
        this.gold.spend(building.levelCostGold());
        building.levelUp();
      } catch (e) {
        throw new Error('No se pudo aumentar el nivel del edificio por falta de recursos de ' + e.message);
      }
    }
    else{
      throw new Error('El nivel del ayuntamiento debe ser mayor que el del edificio a subir de nivel');
    }
  }
  getTownhall(): Townhall {
    return this.townhall;
  }
}
