import {WoodService} from '../resources/WoodService';
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


export class EventoAtaque extends Evento {
  poder: number;
  constructor(msg, power) {
    super(msg);
    this.poder = power;
  }
  realizar() {

  }
}

export class EventoAlterador extends Evento {
  porcentaje: number;
}
