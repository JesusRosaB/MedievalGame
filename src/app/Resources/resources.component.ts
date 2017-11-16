import { Component, OnInit } from '@angular/core';

import {resources} from './resources';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})


export class ResourcesComponent implements OnInit {
	
	recursos: resources[] = [
	    {name: 'Carne', quantity: 500},
	    {name: 'Madera', quantity: 500},
	    {name: 'Oro', quantity: 500}
  	];
  
  constructor() { 

  }

  ngOnInit() {
  }

}
