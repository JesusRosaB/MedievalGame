/**
 * Created by jose on 16/12/17.
 */
import {Component, OnInit} from '@angular/core';
import {Collector} from '../buildings/Collector';
import {CollectorsService} from './collectorsService';

@Component({
  selector: 'app-collectors',
  templateUrl: 'collectors.component.html',
  styleUrls: ['collectors.component.css']
})

export class CollectorsComponent implements OnInit {
  collectors: Collector[] = [];
  constructor(private collectorservice: CollectorsService) {}
  ngOnInit() {
    this.collectors = this.collectorservice.getCollectors();
  }
  levelUp(collector) {
    this.collectorservice.levelUpCollector(collector);
  }
  yieldValue(collector) {
    return this.collectorservice.yieldValue(collector);
  }
}
