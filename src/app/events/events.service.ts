import {Injectable} from '@angular/core';
import {TimerService} from '../timer/timer.service';
import {EventoAtaque, EventoRecursos} from './Evento';
import {MessagesService} from '../messages/messages.service';
import {WoodService} from '../resources/WoodService';
import {MeatService} from '../resources/MeatService';
import {GoldService} from '../resources/GoldService';

@Injectable()
export class EventsService {
  event = new EventoRecursos('', 0);
  constructor(private timer: TimerService, private messages: MessagesService, private Wood: WoodService,
  private Meat: MeatService, private Gold: GoldService) {
    this.timer.eventsTimer.subscribe(() => this.lanzarEvento());
  }
  lanzarEvento() {
    const resultado = Math.random() * 10;
    if (resultado <= 10) {
      if (resultado < 9) {
        this.event = new EventoRecursos('Buena obtencion de recursos', Math.floor(Math.random() * 900 + 100));
      }
      else {
        console.log('Enviando evento recursos negativo');
        this.event = new EventoRecursos('Perdida de recursos', Math.floor((Math.random() * - 900) - 100));
      }
      this.messages.addMessage(this.event.getMessage());
      this.realizar(this.event);
      console.log(this.event.getMessage() + ': ' + this.event.getCantidad() + '\n');
    }
    /*else if (resultado > 10) {
      this.event = new EventoAtaque('Atacaron la aldea', 1/*Aqui colocar la toma de poder de la aldea para introducir una
      cantidad que no sea desorbitada);
    }
    else {

    }*/
  }
  realizar(e: EventoRecursos) {
    if (e.getCantidad() < 0) {
      console.log('Evento negativo');
      this.Wood.loose(-e.getCantidad());
      this.Meat.loose(-e.getCantidad());
      this.Gold.loose(-e.getCantidad());
    }
    else if (e.getCantidad() > 0) {
      console.log('Evento negativo');
      this.Wood.increase(e.getCantidad());
      this.Meat.increase(e.getCantidad());
      this.Gold.increase(e.getCantidad());
    }
  }
}
