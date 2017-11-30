import { Component, OnInit } from '@angular/core';

import {Resources} from './resources';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})


export class ResourcesComponent implements OnInit {
  recursos: Resources[] = [
    {id: 0, name: 'Carne', quantity: 500},
    {id: 1, name: 'Madera', quantity: 500},
    {id: 2, name: 'Oro', quantity: 500}
  ];
  
  
  constructor() {

  }

  ngOnInit() {
    /*this.recursos[0] = new Resources(0, 'Carne', 500);
    this.recursos[1] = new Resources(1, 'Madera', 500);
    this.recursos[2] = new Resources(2, 'Oro', 500);*/
  }

}
