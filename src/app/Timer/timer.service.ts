/**
 * Created by jose on 15/12/17.
 */

import {Injectable} from '@angular/core';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Injectable()
export class timerService{
  /*resourcesTimer = Observable.create((observer) => {
      setInterval(() => {
        console.log('Llego, timer');
        observer.next();
      },1000)
  });*/
  resourcesTimer = TimerObservable.create(1000, 1000);
  eventsTimer = TimerObservable.create(1000, 1000);

  /*eventsTimer = Observable.create((observer) => {
      setInterval(() => {
        observer.next();
      },60000)
  });*/

}
