//Patrón Composite
export abstract class ArmyElement {
  getPower(): any { }
  getCurrentHealth(): any { }
  takeDamage(damage: number): void { }
  isAlive(): any { }
  //setBusy() { }
}
