/**
 * Created by jose on 16/12/17.
 */
import {Component, OnInit} from '@angular/core';
import {WoodService} from '../resources/WoodService';
import {Collector} from './Collector';
import {CollectorsService} from './collectorsService';

@Component({
  selector: 'app-collectors',
  templateUrl: 'collectors.component.html',
  styleUrls: ['collectors.component.css']
})

export class CollectorsComponent implements OnInit {
  collectors: Collector[];
  constructor(private collectorsService: CollectorsService, private Wood: WoodService) {}
  ngOnInit() {
    this.collectors = this.collectorsService.getCollectors();
    console.log('Llego componentes recolectores');
  }
  levelUp(collector) {
    if (collector.levelCost() <= this.Wood.currentQuantity()) {
      this.Wood.spend(collector.levelCost());
    }
    else {
      console.log('No se puede realizar la transacción');
    }
  }
}
