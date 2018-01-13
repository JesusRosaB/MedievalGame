/**
 * Created by jose on 15/12/17.
 */
import {Injectable} from '@angular/core';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Injectable()
export class TimerService {
  resourcesTimer = TimerObservable.create(1000, 1000);
  eventsTimer = TimerObservable.create(1000, 2000000);
}
