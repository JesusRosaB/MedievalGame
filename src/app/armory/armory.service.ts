import { Injectable } from '@angular/core';
import { ListaTrabajos } from '../quarter/listaTrabajos';
import { WoodService } from '../resources/WoodService';

@Injectable()
export class ArmoryService {
  constructor(private listaTrabajos: ListaTrabajos, private armory: ArmoryService, private wood: WoodService) { }

  upgradeJob(id: number): void {
    let price = this.listaTrabajos.trabajos[id].getUpgradeGost();
    try {
      this.wood.spend(price);
    } catch (e) { throw new Error("Madera insuficiente para mejorar.") }
    this.listaTrabajos.trabajos[id].levelUp();
  }
}
