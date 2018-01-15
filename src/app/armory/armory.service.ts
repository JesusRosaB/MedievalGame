import { Injectable } from '@angular/core';
import { ListaTrabajos } from '../quarter/listaTrabajos';
import { WoodService } from '../resources/WoodService';
import { Armory } from '../buildings/armory';

@Injectable()
export class ArmoryService {
  armory: Armory;

  constructor(private listaTrabajos: ListaTrabajos, private wood: WoodService) {
    this.armory = new Armory(1, [400], [400]);
}

  upgradeJob(id: number): void {
    let price = this.listaTrabajos.trabajos[id].getUpgradeCost();
    try {
      this.wood.spend(price);
    } catch (e) {
      throw new Error('Madera insuficiente para mejorar.');
    }
    this.listaTrabajos.trabajos[id].levelUp();
  }
}
