import {Injectable} from '@angular/core';
import {TimerService} from '../timer/timer.service';
<<<<<<< HEAD
import {EventoAtaque, EventoRecursos} from './Evento';
import {MessagesService} from '../messages.service';
import {WoodService} from '../resources/WoodService';
import {MeatService} from '../resources/MeatService';
import {GoldService} from '../resources/GoldService';
=======
import {Evento} from './Evento';
>>>>>>> f6e8af65bcba961be1edc7f75c9138ac3e266d07

@Injectable()
export class EventsService {

  constructor(private timer: TimerService) {
    this.timer.eventsTimer.subscribe(() => this.lanzarEvento());
  }
  lanzarEvento() {
    const resultado = Math.random() * 100;
    if (resultado % 10 < 3) {

    }
    else if (resultado % 10 < 7) {

    }
    else {

    }
  }
}
