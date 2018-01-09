
export class ArmyComposite implements ArmyElement {

  private members: ArmyElement[];

  constructor() { };

  public getPower() :number {
    let power: number = 0;
    for (let m of this.members) {
      power += m.getPower();
    }
    return power;
  }

  public addComponent(component: ArmyElement): void {
    this.members.push(component);
  }

  public removeComponent(component: ArmyElement): void {
    let index = this.members.indexOf(component, 0);
    if (index > -1) {
      this.members.splice(index, 1);
    }
  }

  public setBusy(): void {
    for (let m of this.members) {
      m.setBusy();
    }
  }

  /*public getComponent(id: number): ArmyElement {
    //Dar un identificador a Composite?
  }*/
}
