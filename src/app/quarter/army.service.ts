import {ArmyElement} from './ArmyElement';
import {Injectable} from '@angular/core';

@Injectable()
export class ArmyService {

  private members: ArmyElement[] = [];
  private counter: number;

  constructor() {
    this.counter = 0;}

  public getPower(): number {
    let power = 0;
    for (let m of this.members) {
      power += m.getPower();
    }
    return power;
  }

  public getCurrentHealth(): number {
    let health = 0;
    for (let m of this.members) {
      health += m.getCurrentHealth();
    }
    return health;
  }

  public takeDamage(damage: number): void {
    let remaining: number = damage;
    for (let m of this.members) {
      if (remaining > m.getCurrentHealth()) {
        remaining -= m.getCurrentHealth();
        this.removeComponent(m);
      }
      else if (remaining > 0) {
        m.takeDamage(remaining);
        remaining = 0;
      }

    }
  }

  public isAlive(): boolean {
    return this.counter != 0;
  }

  public addComponent(component: ArmyElement): void {
    this.members.push(component);
    this.counter++;
  }

  public removeComponent(component: ArmyElement): void {
    let index = this.members.indexOf(component, 0);
    if (index > -1) {
      this.members.splice(index, 1);
    }
    this.counter--;
  }

  public getCount() {
    return this.counter;
  }
 
  

  /*public setBusy(): void {
    for (let m of this.members) {
      m.setBusy();
    }
  }*/

  /*public getComponent(id: number): ArmyElement {
    //Dar un identificador a Composite?
  }*/
}
