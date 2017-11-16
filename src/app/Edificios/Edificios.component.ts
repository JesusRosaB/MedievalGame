import { Component, OnInit } from '@angular/core';
import { Edificios } from './Edificios';

@Component({
  selector: 'app-heroes',
  templateUrl: './Edificios.component.html',
  styleUrls: ['./Edificios.component.css']
})

export class EdificiosComponent{
  Edificios: Edificios= {
    level: 1,
    CosteMejora: 2500,
    name: 'puticlub'
  };

  constructor() {}

}
