import {Component} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {EventsService} from './events.service';
import {Evento} from './Evento';

@Component({
  selector: 'app-events',
  template: ``,
  styles: []
})

export class EventsComponent {
  event: Evento;
  constructor(private events: EventsService, private msg: MessageService) {
    this.events.AvisoEvento.subscribe((e) => this.OnNext(e));
  }
  OnNext(e) {
    this.event = e;
    this.event.realizar();
    this.msg.add({severity: 'Info', summary: 'Evento', detail: this.event.getMessage()});
  }
}
