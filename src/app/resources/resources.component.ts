import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {WoodService} from './WoodService';
import {MeatService} from './MeatService';
import {GoldService} from './GoldService';
import { DatabaseService } from '../baseDeDatos/database.service';
import { Resources } from './resources';
import {DatabaseResourceService} from '../baseDeDatos/databaseResource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit, DoCheck {
  recursos: number[] = [];
  constructor(private Wood: WoodService, private Meat: MeatService, private Gold: GoldService, private _databaseService: DatabaseResourceService) {}
  ngOnInit() {
    this.recursos.push(this.Wood.currentQuantity(), this.Meat.currentQuantity(), this.Gold.currentQuantity());
  }
  ngDoCheck() {
    if (this.recursos[0] !== this.Wood.currentQuantity()) {
      this.recursos[0] = this.Wood.currentQuantity();
      var wood = {
        id: 1,
        name: "Wood",
        quantity: this.Wood.currentQuantity()
      }
      this._databaseService.updateResource(wood).subscribe((s) => console.log(s));
    }
    if (this.recursos[1] !== this.Meat.currentQuantity()) {
      this.recursos[1] = this.Meat.currentQuantity();
      var meat = {
        id: 2,
        name: "Meat",
        quantity: this.Meat.currentQuantity()
      }
      this._databaseService.updateResource(meat).subscribe((s) => console.log(s));
    }
    if (this.recursos[2] !== this.Gold.currentQuantity()) {
      this.recursos[2] = this.Gold.currentQuantity();
      var gold = {
        id: 3,
        name: "Gold",
        quantity: this.Gold.currentQuantity()
      }
      this._databaseService.updateResource(gold).subscribe((s) => console.log(s));
    }
  }
}
