import {Injectable} from '@angular/core';
import {Townhall} from '../buildings/townhall';

@Injectable()
export class TownhallService {
  townhall: Townhall = new Townhall(1, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 'Ayuntamiento',
    1000, 1000, 1000, 200);
  constructor() {}
  getTownhall(): Townhall {
    return this.townhall;
  }
}
