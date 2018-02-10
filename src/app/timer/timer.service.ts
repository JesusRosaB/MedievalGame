/**
 * Created by jose on 15/12/17.
 */
import {Injectable} from '@angular/core';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {Subscription} from 'rxjs/Subscription';
import {CollectorsService, Observer} from '../collectors/collectorsService';

export interface Sujeto {
  addObserver();
  deleteObserver();
}

@Injectable()
export class TimerService {
  observers: Observer[] = [];
  resourcesTimer = TimerObservable.create(1000, 1000);
  eventsTimer = TimerObservable.create(1000, 2000000);
  constructor() {
    this.resourcesTimer.subscribe(() => this.observers.forEach((o) => o.actualizar()));
  }
  addObserver(observer: Observer) {
    this.observers.push(observer);
  }
  deleteObserver(observer: Observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }
}
