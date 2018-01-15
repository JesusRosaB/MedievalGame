import {Injectable} from '@angular/core';
import {WoodService} from '../resources/WoodService';
import {GoldService} from '../resources/GoldService';
import {TownhallService} from '../townhall/townhall.service';
import {Building} from './building';

@Injectable()
export class LevelUpBuildingService {
  constructor(private wood: WoodService, private gold: GoldService, private townhall: TownhallService) {}
  levelUp(building: Building) {
    if (!building.levelUpPosible()) {
      throw new Error('Edificio al nivel maximo');
    }
    if (building === this.townhall.getTownhall() || this.townhall.getTownhall().getLevel() > building.getLevel()){
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
}
