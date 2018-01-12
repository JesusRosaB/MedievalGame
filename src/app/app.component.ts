import { Component } from '@angular/core';
import {TimerService} from './timer/timer.service';
import {CollectorsService} from './collectors/collectorsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MedievalGame';
  constructor(private Timer: TimerService, private collectors: CollectorsService) {}
}
