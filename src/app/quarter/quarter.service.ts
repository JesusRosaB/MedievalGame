import {Injectable} from '@angular/core';
import {ArmyService} from './army.service';
import {ListaTrabajos} from './listaTrabajos';

@Injectable()
export class QuarterService {
  constructor(private trooptype: ListaTrabajos, private army: ArmyService) {}
  comprarSoldados(quantity) {
    let cont = 0;
    while (cont < quantity) {
      this.army.addComponent(this.trooptype.getSoldado());
      ++cont;
    }
  }
}
