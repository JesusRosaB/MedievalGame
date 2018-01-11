import { Component, OnInit } from '@angular/core';
import {ArmyService} from './army.service';


@Component({
  selector: 'app-quarter',
  templateUrl: './quarter.component.html',
  styleUrls: ['./quarter.component.css']
})
export class QuarterComponent implements OnInit {

  constructor(private army: ArmyService) {}
  ngOnInit() {

  }
}
