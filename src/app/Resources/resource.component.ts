import {Component} from '@angular/core';

import {Resource} from './Resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourceComponent{
  Resources: Resource[] = [
    {name: 'Carne', quantity: 500},
    {name: 'Madera', quantity: 500},
    {name: 'Oro', quantity: 500}
  ];

}
