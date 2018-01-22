import { ArmyElement } from '../quarter/ArmyElement';
import { WoodService } from '../resources/WoodService';
import {MeatService} from '../resources/MeatService';
import {GoldService} from '../resources/GoldService';

export abstract class Evento {
  protected Mensaje: string;
  constructor(msg) {
    this.Mensaje = msg;
  }
  getMessage() {
    return this.Mensaje;
  }
}

export class EventoRecursos extends Evento {
  private cantidad: number;
  constructor(msg, cant) {
    super(msg);
    this.cantidad = cant;
  }
  getCantidad() {
    return this.cantidad;
  }
}


export class EventoEnfermedad extends Evento {
  porcentaje: number;
  constructor(msg, porcentaje) {
    super(msg);
    this.porcentaje = porcentaje;
  }
}

export class EventoAsalto extends Evento {
  grupo: ArmyElement;
  constructor(msg, grupo) {
    super(msg);
    this.grupo = grupo;
  }
}

export class EventoAlterador extends Evento {
  porcentaje: number;
}
