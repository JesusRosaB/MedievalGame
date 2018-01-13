import { Component, OnInit } from '@angular/core';
import { ArmoryService } from './armory.service';
import { Job } from '../job';
import { ListaTrabajos } from '../quarter/listaTrabajos';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css']
})
export class ArmoryComponent implements OnInit {

  constructor(private armoryService :ArmoryService) { }

  ngOnInit() {
  }

  upgradeJob(job: Job) {
    this.armoryService.upgradeJob(job.getId());
  }
}
