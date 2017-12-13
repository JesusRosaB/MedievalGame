import {Component, OnChanges, OnInit} from '@angular/core';

import {Resources} from './resources';
import {WoodService} from "./WoodService";
import {ResourcesService} from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})


export class ResourcesComponent implements OnInit{
  Madera:Resource;
  constructor(private Service:ResourcesService) {}
  ngOnInit() {
    this.Madera=this.Service.getMadera();
    Carne=this.Service.getCarne();
    Oro=this.Service.getOro();
  }

}
