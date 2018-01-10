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
  realizar() {}
}

export class EventoRecursos extends Evento {
  static Wood: WoodService;
  static Meat: MeatService;
  static Gold: GoldService;
  private cantidad: number;
  constructor(msg, cant) {
    super(msg);
    this.cantidad = cant;
  }
  getCantidad() {
    return this.cantidad;
  }
  realizar() {
    if (this.cantidad < 0) {
      console.log('Evento negativo');
      EventoRecursos.Wood.loose(this.cantidad);
      console.log(EventoRecursos.Wood.loose(this.cantidad));
      EventoRecursos.Meat.loose(this.cantidad);
      EventoRecursos.Gold.loose(this.cantidad);
    }
    else if (this.cantidad > 0) {
      console.log('Evento positivo');
      EventoRecursos.Wood.increase(this.cantidad);
      console.log(EventoRecursos.Wood.loose(this.cantidad));
      EventoRecursos.Meat.increase(this.cantidad);
      EventoRecursos.Gold.increase(this.cantidad);
    }
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
