import {Injectable} from '@angular/core';
import {WoodService} from '../resources/WoodService';
import {GoldService} from '../resources/GoldService';
import {TownhallService} from '../townhall/townhall.service';

@Injectable()
export class LevelUpBuildingService {
  constructor(private wood: WoodService, private gold: GoldService, private townhall: TownhallService) {}
  levelUp(building) {
    if (!this.levelUpPosible(building)) {
      throw new Error('Edificio al nivel maximo');
    }
    if (building === this.townhall.getTownhall() || this.townhall.getTownhall().level > building.level) {
      try {
        this.wood.spend(this.levelCostWood(building));
        this.gold.spend(this.levelCostGold(building));
        building.level++;
      } catch (e) {
        throw new Error('No se pudo aumentar el nivel del edificio por falta de recursos de ' + e.message);
      }
    }
    else{
      throw new Error('El nivel del ayuntamiento debe ser mayor que el del edificio a subir de nivel');
    }
  }
  levelCostWood(building): number {
    return building.upgradeCostWood[building.level - 1];
  }
  levelCostGold(building): number {
    return building.upgradeCostGold[building.level - 1];
  }
  levelUpPosible(building): boolean {
    return building.level < building.upgradeCostWood.length;
  }
}
