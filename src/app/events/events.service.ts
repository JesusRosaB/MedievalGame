import {Injectable} from '@angular/core';
import {TimerService} from '../timer/timer.service';
import {Evento, EventoEnfermedad, EventoAsalto, EventoRecursos} from './Evento';
import {MessagesService} from '../messages/messages.service';
import {WoodService} from '../resources/WoodService';
import {MeatService} from '../resources/MeatService';
import {GoldService} from '../resources/GoldService';
import {ArmyService} from '../quarter/army.service'
import { Result, Battle } from '../questhall/battle';
import { Troop, Job } from '../quarter/trooptypeobject';

@Injectable()
export class EventsService {
  event: any;// = new EventoRecursos('', 0);

  constructor(private timer: TimerService, private messages: MessagesService, private Wood: WoodService,
  private Meat: MeatService, private Gold: GoldService, private army: ArmyService) {
    this.timer.eventsTimer.subscribe(() => this.lanzarEvento());
  }

  lanzarEvento() {
    const resultado = Math.random() * 20;
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
    else if (resultado > 10 && resultado < 17) {
      this.event = new EventoEnfermedad('Gripe aviar', 25);
      this.messages.addMessage(this.event.getMessage());
      this.realizar(this.event);
    }
    else {
      this.event = new EventoAsalto('¡Un bandido se presenta en la aldea!', new Troop(new Job(0, 'Bandido', 1, [1 + Math.floor(this.army.getCurrentHealth() / 10 * Math.random())],
        1 + Math.floor(Math.random() * this.army.getPower() * 10), [0], [0], [0])));
      this.messages.addMessage(this.event.getMessage()+"\nPoder: "+this.event.grupo.getPower()+"\nVida: "+this.event.grupo.getCurrentHealth());
      this.realizar(this.event);
    }
  }

  realizar(e: Evento): void {
    if (e instanceof EventoRecursos) {
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
    else if (e instanceof EventoEnfermedad) {
      let dmg = Math.floor(e.porcentaje / 100 * this.army.getCurrentHealth());
      this.army.takeDamage(dmg);
      console.log('Tu ejército recibe ' + dmg + ' puntos de daño.');
    }
    else if (e instanceof EventoAsalto) {
      let batalla: Battle = new Battle(this.army, e.grupo);
      batalla.execute();
      let resultado: Result = batalla.getResult();
      console.log(resultado.description);
      if (!resultado.won) {
        this.Wood.loose(Math.floor(this.Wood.currentQuantity() / 2));
        this.Meat.loose(Math.floor(this.Meat.currentQuantity() / 2));
        this.Gold.loose(Math.floor(this.Gold.currentQuantity() / 2));
        console.log("¡Tus recursos han sido saqueados!");
      }
    }
    else {
      console.log("")
    }
  }
}

