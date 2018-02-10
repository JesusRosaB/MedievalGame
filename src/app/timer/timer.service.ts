/**
 * Created by jose on 15/12/17.
 */
import {Injectable} from '@angular/core';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {Subscription} from 'rxjs/Subscription';
import {CollectorsService, Observer} from '../collectors/collectorsService';

export interface SujetoResource {
  addObserverResource(observer: Observer);
  deleteObserverResource(observer: Observer);
  addObserverEvent(observer: Observer);
  deleteObserverEvent(observer: Observer);
}

@Injectable()
export class TimerService {
  observersResources: Observer[] = [];
  observersEvents: Observer[] = [];
  resourcesTimer = TimerObservable.create(1000, 1000);
  eventsTimer = TimerObservable.create(1000, 2000000);
  constructor() {
    this.resourcesTimer.subscribe(() => this.observersResources.forEach((o) => o.actualizar()));
    this.eventsTimer.subscribe(() => this.observersEvents.forEach((o) => o.actualizar()));
  }
  addObserverResource(observer: Observer) {
    this.observersResources.push(observer);
  }
  deleteObserverResource(observer: Observer) {
    this.observersResources.splice(this.observersResources.indexOf(observer), 1);
  }
  addObserverEvent(observer: Observer) {
    this.observersEvents.push(observer);
  }
  deleteObserverEvent(observer: Observer) {
    this.observersEvents.splice(this.observersEvents.indexOf(observer), 1);
  }
}
