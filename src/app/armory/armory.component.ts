import { Component, OnInit } from '@angular/core';
import { ArmoryService } from './armory.service';
import { Job } from '../quarter/trooptypeobject';
import { ListaTrabajos } from '../quarter/listaTrabajos';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css'],
  providers: [ ArmoryService ],
})
export class ArmoryComponent implements OnInit {
  trabajos: Job[];

  constructor(private lista: ListaTrabajos, private armoryService: ArmoryService) { }

  ngOnInit() {
    this.trabajos = this.lista.getJobs();
  }

  upgradeJob(job :Job) {
    this.armoryService.upgradeJob(job.getId());
  }
}
