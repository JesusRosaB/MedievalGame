import { Component, OnInit } from '@angular/core';
import {ArmyService} from './army.service';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {
  totalPower: number;
  constructor(private army: ArmyService) {}
  ngOnInit() {
    this.totalPower = this.army.getPower();
  }
}
