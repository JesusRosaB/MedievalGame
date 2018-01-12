import { Component, OnInit } from '@angular/core';
import {ArmyService} from './army.service';
import {Job} from './trooptypeobject';
import {ListaTrabajos} from './listaTrabajos';


@Component({
  selector: 'app-quarter',
  templateUrl: './quarter.component.html',
  styleUrls: ['./quarter.component.css']
})
export class QuarterComponent implements OnInit {
  constructor() {}
  ngOnInit() {

  }
  comprar(quantity) {

  }
}
