import {Injectable} from '@angular/core';
import {TimerService} from '../timer/timer.service';

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
