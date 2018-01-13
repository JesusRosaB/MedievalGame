import {Injectable} from '@angular/core';
import {ArmyService} from './army.service';
import {ListaTrabajos} from './listaTrabajos';
import {WoodService} from '../resources/WoodService';

@Injectable()
export class QuarterService {
  constructor(private trooptype: ListaTrabajos, private army: ArmyService, private wood: WoodService) {}
  comprarSoldados(quantity) {
    let cont = 0;
    while (cont < quantity) {
      try {
        this.wood.spend(1);
      }catch (e) {
        throw new Error('No se puede comprar el soldado');
      }
      this.army.addComponent(this.trooptype.getSoldado());
      ++cont;
    }
  }
}
