import { Component, OnInit } from '@angular/core';
import {TownhallService} from './townhall.service';
import {Building} from '../buildings/building';

@Component({
  selector: 'app-townhall',
  templateUrl: './townhall.component.html',
  styleUrls: ['./townhall.component.css']
})
export class TownhallComponent implements OnInit {
  edificios: Building[] = [];
  constructor(private townhall: TownhallService) {}
  ngOnInit() {
    this.edificios = this.townhall.getBuilding();
  }
  levelUp(building: Building) {
    this.townhall.levelUp(building);
  }
}
