import {Injectable} from '@angular/core';
import {TimerService} from '../timer/timer.service';
import {Evento, EventoAtaque, EventoRecursos} from './Evento';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsService {
  event = new EventoRecursos('', 0);
  constructor(private timer: TimerService) {
    this.timer.eventsTimer.subscribe(() => this.lanzarEvento());
    console.log('Llego servicio eventos');
  }
  AvisoEvento = BehaviorSubject.create(this.event);
  lanzarEvento() {
    let resultado = Math.random() * 10;
    if (resultado <= 10) {
      if (resultado < 2) {
        this.event = new EventoRecursos('Buena obtencion de recursos', Math.random() * 900 + 100);
      }
      else {
        this.event = new EventoRecursos('Perdida de recursos', (Math.random() * -900) - 100);
      }
      console.log(this.event.getMessage() + ': ' + this.event.getCantidad() + '\n');
    }
    /*else if (resultado > 10) {
      this.event = new EventoAtaque('Atacaron la aldea', 1/*Aqui colocar la toma de poder de la aldea para introducir una
      cantidad que no sea desorbitada);
    }
    else {

    }*/
  }
}
