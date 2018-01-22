import {Component, DoCheck, OnInit} from '@angular/core';
import {TownhallService} from './townhall.service';
import {Townhall} from '../buildings/townhall';
import {LevelUpBuildingService} from '../buildings/levelUpBuilding.service';

@Component({
  selector: 'app-townhall',
  templateUrl: './townhall.component.html',
  styleUrls: ['./townhall.component.css']
})
export class TownhallComponent implements OnInit, DoCheck {
  ayuntamiento: Townhall;
  constructor(private townhall: TownhallService, private levelup: LevelUpBuildingService) {}
  ngOnInit() {
    this.ayuntamiento = this.townhall.getTownhall();
  }
  levelUp() {
    this.levelup.levelUp(this.ayuntamiento);
  }
  ngDoCheck() {
    if (this.ayuntamiento !== this.townhall.getTownhall()) {
      this.ayuntamiento = this.townhall.getTownhall();
    }
  }
  getResourceLimit() {
    return this.townhall.getResourceLimit();
  }
  getUnitLimit() {
    return this.townhall.getUnitLimit();
  }
}
