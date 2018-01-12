import {Injectable} from '@angular/core';
import {TimerService} from '../timer/timer.service';
import {Evento, EventoAtaque, EventoRecursos} from './Evento';
import {MessagesService} from '../messages/messages.service';

@Injectable()
export class EventsService {
  event = new EventoRecursos('', 0);
  constructor(private timer: TimerService, private messages: MessagesService) {
    this.timer.eventsTimer.subscribe(() => this.lanzarEvento());
    console.log('Llego servicio eventos');
  }
  lanzarEvento() {
    let resultado = Math.random() * 10;
    if (resultado <= 10) {
      if (resultado < 2) {
        console.log('Enviando evento recursos positivo');
        this.event = new EventoRecursos('Buena obtencion de recursos', Math.random() * 900 + 100);
      }
      else {
        console.log('Enviando evento recursos negativo');
        this.event = new EventoRecursos('Perdida de recursos', (Math.random() * - 900) - 100);
      }
      this.messages.addMessage(this.event.getMessage());
      this.event.realizar();
    }
    /*else if (resultado > 10) {
      this.event = new EventoAtaque('Atacaron la aldea', 1/*Aqui colocar la toma de poder de la aldea para introducir una
      cantidad que no sea desorbitada);
    }
    else {

    }*/
  }
}
