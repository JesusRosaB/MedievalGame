import { Component, OnInit } from '@angular/core';
import {ArmyService} from './army.service';
import {Job} from './trooptypeobject';
import {ListaTrabajos} from './listaTrabajos';
import {QuarterService} from './quarter.service';


@Component({
  selector: 'app-quarter',
  templateUrl: './quarter.component.html',
  styleUrls: ['./quarter.component.css']
})
export class QuarterComponent implements OnInit {
  constructor(private quarterservice: QuarterService) {}
  ngOnInit() {

  }
  comprarSoldado(quantity) {
    this.quarterservice.comprarSoldados(quantity);
  }
}
