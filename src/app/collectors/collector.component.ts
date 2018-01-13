/**
 * Created by jose on 16/12/17.
 */
import {Component, OnInit} from '@angular/core';
import {CarouselModule} from 'primeng/primeng';
import {WoodService} from '../resources/WoodService';
import {TimerService} from '../timer/timer.service';
import {Collector} from './Collector';
import {CollectorsService} from './collectorsService';

@Component({
  selector: 'app-collectors',
  templateUrl: 'collectors.component.html',
  styleUrls: ['collectors.component.css']
})

export class CollectorsComponent implements OnInit {
  collectors: Collector[];
  constructor(private collectorsService: CollectorsService) {}
  ngOnInit() {
    this.collectors = this.collectorsService.getCollectors();
  }
}
