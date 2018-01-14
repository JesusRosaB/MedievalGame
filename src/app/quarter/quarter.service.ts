import {Injectable} from '@angular/core';
import {ArmyService} from './army.service';
import {ListaTrabajos} from './listaTrabajos';
import {WoodService} from '../resources/WoodService';

@Injectable()
export class QuarterService {
  constructor(private trooptype: ListaTrabajos, private army: ArmyService, private wood: WoodService) {}

}
