import {Injectable} from '@angular/core';
import {Job} from './trooptypeobject';
import {ArmyService} from './army.service';
import {MeatService} from '../resources/MeatService';
import {GoldService} from '../resources/GoldService';

@Injectable()
export class ListaTrabajos {
  trabajos: Job[] = [];
  constructor(private army: ArmyService, private meat: MeatService, private gold: GoldService) {
    console.log('Constructor de listaTrabajos');
    this.trabajos.push(
      new Job(0, 'Soldado', 1, [1, 2, 3, 4, 5], 10, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10], [100, 110, 120, 130, 140]),
      new Job(1, 'Arquero', 1, [1, 2, 3, 4, 5], 10, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10], [100, 110, 120, 130, 140]),
      new Job(2, 'Lancero', 1, [1, 2, 3, 4, 5], 10, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10], [100, 110, 120, 130, 140]),
      new Job(3, 'Caballeria Ligera', 1, [1, 2, 3, 4, 5], 10, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10], [100, 110, 120, 130, 140]),
      new Job(4, 'Caballeria Pesada', 1, [1, 2, 3, 4, 5], 10, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10], [100, 110, 120, 130, 140]),
      new Job(5, 'Paladin', 1, [1, 2, 3, 4, 5], 10, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10], [100, 110, 120, 130, 140]),
    );
  }
  getJobs() {
    return this.trabajos;
  }
  efectuarCompra(quantity, id) {
    let cont = 0;
    while (cont < quantity) {
      try {
        this.meat.spend(this.trabajos[id].getMeatCost());
        this.gold.spend(this.trabajos[id].getGoldCost());
        this.army.addComponent(this.trabajos[id].newTroop());
        ++cont;
      } catch (e) {
        throw new Error('No se puede comprar el soldado por falta de recursos de :' + e.message);
      }
    }
  }
  /*getSoldado(quantity) {
    this.efectuarCompra(quantity, 0);
  }
  getArquero(quantity) {
    this.efectuarCompra(quantity, 1);
  }
  getLancero(quantity) {
    this.efectuarCompra(quantity, 2);
  }
  getCLigera(quantity) {
    this.efectuarCompra(quantity, 3);
  }
  getCPesada(quantity) {
    this.efectuarCompra(quantity, 4);
  }
  getPaladin(quantity) {
    this.efectuarCompra(quantity, 5);
  }*/
}
