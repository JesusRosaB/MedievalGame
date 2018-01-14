import { Component, OnInit } from '@angular/core';
import { ArmoryService } from './armory.service';
import { Job } from '../job';
import { ListaTrabajos } from '../quarter/listaTrabajos';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css'],
  providers: [ ArmoryService ],
})
export class ArmoryComponent implements OnInit {

  constructor(private armoryService :ArmoryService) { }

  ngOnInit() {
  }

  upgradeSoldier() {
    this.armoryService.upgradeJob(0);
  }
}
