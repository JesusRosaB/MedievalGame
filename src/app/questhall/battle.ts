import { ArmyElement } from "../quarter/ArmyElement";
import { ArmyService } from "../quarter/army.service";
import { Troop, Job } from "../quarter/trooptypeobject";
import { ListaTrabajos } from "../quarter/listaTrabajos";


export class Result {
  public won: boolean;
  public description: string;

  constructor() {
    this.won = false;
    this.description = "";
  }
}

//Patrón Command
export class Battle {
  private group1: ArmyElement;
  private group2: ArmyElement;
  private group1_backup: ArmyElement;
  private group2_backup: ArmyElement;
  private result: Result;

  constructor(group1: ArmyElement, group2: ArmyElement) {
    this.group1 = group1;
    this.group2 = group2;
    this.group1_backup = group1;
    this.group2_backup = group2;
    this.result = new Result();
  }

  public execute() :void {
    let dmg1 = 0;
    let dmg2 = 0;
    while (this.group1.isAlive() && this.group2.isAlive()) {
      dmg1 = this.group1.getPower();
      dmg2 = this.group2.getPower();
      this.group1.takeDamage(dmg2);
      this.group2.takeDamage(dmg1);
      this.result.description += "Tu ejército hace "+ dmg1 +" de daño y recibe "+ dmg2 + ".\n"
    }
    this.result.won = !this.group2.isAlive();
  }

  public undo(): void {
    this.group1 = this.group1_backup;
    this.group2 = this.group2_backup;
    this.result = new Result();
  }

  public getResult(): Result {
    return this.result;
  }
}

