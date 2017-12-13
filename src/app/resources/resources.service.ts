/**
 * Created by jose on 30/11/17.
 */

import {Injectable} from "@angular/core";
import {Resources} from "./resources";

@Injectable()
export class ResourcesService {
  private Resources:Map<number,Resources>=new Map([[1,new Resources(1,'Madera',500)], [2,new Resources(2,'Carne',500)], [3,new Resources(3,'Oro',500)]]);

  getMadera(){
    return this.Resources.get(1);
  }

  getCarne(){
    return this.Resources.get(2);
  }

  getOro(){
    return this.Resources.get(3);
  }

  addMadera(cantidad:number){
    this.Resources.set(1, (this.Resources.get(1)).quantity+cantidad);
  }

  addCarne(cantidad:number){
    this.Resources.set('Carne', this.Resources.get('Carne')+cantidad);
  }

  addOro(cantidad:number){
    this.Resources.set('Oro', this.Resources.get('Oro')+cantidad);
  }

  gastarMadera(cantidad:number){
    this.Resources.set('Madera', this.Resources.get('Madera')-cantidad);
  }

  gastarCarne(cantidad:number){
    this.Resources.set('Carne', this.Resources.get('Carne')-cantidad);
  }

  gastarOro(cantidad:number){
    this.Resources.set('Oro', this.Resources.get('Oro')-cantidad);
  }

}
