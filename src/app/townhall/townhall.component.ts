import {Component, DoCheck, OnInit} from '@angular/core';
import {TownhallService} from './townhall.service';
import {Townhall} from '../buildings/townhall';

@Component({
  selector: 'app-townhall',
  templateUrl: './townhall.component.html',
  styleUrls: ['./townhall.component.css']
})
export class TownhallComponent implements OnInit, DoCheck {
  ayuntamiento: Townhall;
  constructor(private townhall: TownhallService) {}
  ngOnInit() {
    this.ayuntamiento = this.townhall.getTownhall();
  }
  levelUp() {
    this.townhall.buildingLevelUp(this.ayuntamiento);
  }
  ngDoCheck() {
    if (this.ayuntamiento !== this.townhall.getTownhall()) {
      this.ayuntamiento = this.townhall.getTownhall();
    }
  }
}
