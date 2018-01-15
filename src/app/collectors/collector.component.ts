/**
 * Created by jose on 16/12/17.
 */
import {Component, OnInit} from '@angular/core';
import {Collector} from '../buildings/Collector';
import {TownhallService} from '../townhall/townhall.service';

@Component({
  selector: 'app-collectors',
  templateUrl: 'collectors.component.html',
  styleUrls: ['collectors.component.css']
})

export class CollectorsComponent implements OnInit {
  collectors: Collector[] = [];
  constructor(private townhall: TownhallService) {}
  ngOnInit() {
    this.collectors = this.townhall.getCollectors();
  }
}
