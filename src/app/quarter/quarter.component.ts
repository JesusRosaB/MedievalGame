import { Component, OnInit } from '@angular/core';
import {ListaTrabajos} from './listaTrabajos';
import {Job} from './trooptypeobject';

@Component({
  selector: 'app-quarter',
  templateUrl: './quarter.component.html',
  styleUrls: ['./quarter.component.css']
})
export class QuarterComponent implements OnInit {
  trabajos: Job[];
  constructor(private lista: ListaTrabajos) {}
  ngOnInit() {
    this.trabajos = this.lista.getJobs();
  }
  comprarTropa(quantity , id) {
    this.lista.efectuarCompra(quantity, id);
  }
}
