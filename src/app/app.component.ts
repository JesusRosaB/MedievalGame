import { Component } from '@angular/core';
import {TimerService} from './timer/timer.service';
import {CollectorsService} from './collectors/collectorsService';
import {EventsService} from './events/events.service';
import {MarketService} from './market/market.service';
import {ArmoryService} from './armory/armory.service';
import {TownhallService} from './townhall/townhall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MedievalGame';
  constructor(private timer: TimerService, private events: EventsService,
              private collectors: CollectorsService, private market: MarketService,
              private armory: ArmoryService, private townhall: TownhallService) {}
}
