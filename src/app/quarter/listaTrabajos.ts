import {Injectable} from '@angular/core';
import {Job} from './trooptypeobject';


@Injectable()
export class ListaTrabajos {
  trabajos: Job[];
  constructor() {
    this.trabajos.push(
      new Job(0, 'Soldado', 1, [1, 2, 3, 4, 5], 10, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10],
        [100, 110, 120, 130, 140]),
    );
  }

  getSoldado() {
    return Job[0].newTroop();
  }
}
