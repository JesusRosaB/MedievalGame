/**
 * Created by jose on 30/11/17.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class ResourcesService {
  private Resources:Map<string,number>=new Map([['Madera', 500], ['Carne', 500], ['Oro', 500]]);

  getMadera(){
    return this.Resources.get('Madera');
  }

  getCarne(){
    return this.Resources.get('Carne');
  }

  getOro(){
    return this.Resources.get('Oro');
  }

  addMadera(cantidad:number){
    this.Resources.set('Madera', this.Resources.get('Madera')+cantidad);
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
