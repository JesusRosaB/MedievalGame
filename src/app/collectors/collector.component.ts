/**
 * Created by jose on 16/12/17.
 */
import {Component, OnChanges, OnInit} from '@angular/core';
import {Collector} from '../buildings/Collector';
import {CollectorsService} from './collectorsService';
import { DatabaseService } from '../baseDeDatos/database.service';
import {DatabaseCollectorsService} from '../baseDeDatos/databaseCollectors.service';

@Component({
  selector: 'app-collectors',
  templateUrl: 'collectors.component.html',
  styleUrls: ['collectors.component.css']
})

export class CollectorsComponent implements OnInit, OnChanges {
  collectors: Collector[] = [];
  constructor(private collectorservice: CollectorsService, private _databaseService: DatabaseCollectorsService) {}

  ngOnInit() {
    this.collectors = this.collectorservice.getCollectors();
  }

  levelUp(collector) {
    console.log(collector);
    this.collectorservice.levelUpCollector(collector);
    this._databaseService.updateCollector(collector).subscribe((s) => console.log(s));
  }

  yieldValue(collector) {
    return this.collectorservice.yieldValue(collector);
  }
  ngOnChanges() {
    if (this.collectorservice.getCollectors() !== this.collectors) {
      this.collectors = this.collectorservice.getCollectors();
    }
  }
}
