import {Component, DoCheck, OnInit} from '@angular/core';
import {TownhallService} from './townhall.service';
import {Townhall} from '../buildings/townhall';
import {LevelUpBuildingService} from '../buildings/levelUpBuilding.service';
import { DatabaseService } from '../baseDeDatos/database.service';
import {DatabaseTownhallService} from '../baseDeDatos/databaseTownhall.service';

@Component({
  selector: 'app-townhall',
  templateUrl: './townhall.component.html',
  styleUrls: ['./townhall.component.css']
})
export class TownhallComponent implements OnInit, DoCheck {
  ayuntamiento: Townhall;
  constructor(private townhall: TownhallService, private levelup: LevelUpBuildingService, private _databaseService: DatabaseTownhallService) {}
  ngOnInit() {
    this.ayuntamiento = this.townhall.getTownhall();
  }
  levelUp() {
    this.levelup.levelUp(this.ayuntamiento);
    this._databaseService.updateTownhall(this.ayuntamiento).subscribe((s) => console.log(s));
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
