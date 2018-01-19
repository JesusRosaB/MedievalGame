import { Injectable } from '@angular/core';
import { ListaTrabajos } from '../quarter/listaTrabajos';
import { WoodService } from '../resources/WoodService';
import { Armory } from '../buildings/armory';
import { LevelUpBuildingService } from '../buildings/levelUpBuilding.service';

@Injectable()
export class ArmoryService {
  armory: Armory;

  constructor(private listaTrabajos: ListaTrabajos, private wood: WoodService, private levelup: LevelUpBuildingService) {
    this.armory = new Armory(1, [1, 2, 3], [1, 2, 3]);
}

  upgradeJob(id: number): void {
    if (this.listaTrabajos.trabajos[id].getLevel() >= this.armory.getLevel()) {
      throw new Error("Nivel de mejora no puede superar el nivel de la armería.")
    }
    let price = this.listaTrabajos.trabajos[id].getUpgradeCost();
    try {
      this.wood.spend(price);
    } catch (e) {
      throw new Error('Madera insuficiente para mejorar.');
    }
    this.listaTrabajos.trabajos[id].levelUp();
  }

  getArmory() {
    return this.armory;
  }

  levelUp(armory : Armory) {
    this.levelup.levelUp(armory);
  }
}
