/*
Implementación incompleta de todos los edificios para ponerse en componentes.
Cosas pendientes:
- La implementación de los eventos modificadores. ¿Mover los modificadores
  a otra clase? ¿Usar función timeout?
- El Cuartel
- Se necesitan un método extra en Resource, getName().
- Los arrays se podrían cambiar a maps.
*/
export class Building {
    protected level: number;
    protected upgradeCost: number[];
    protected name: string;

    constructor(level: number, upgradeCost: number[], name: string) {
        this.level = level;
        this.upgradeCost = upgradeCost;
        this.name = name;
    }
    getLevel(): number {
        return this.level;
    }

    levelCost(): number {
      return this.upgradeCost[this.level];
    }

    levelUp(): void {
        this.level++;
    }

    getName(): string {
      return this.name;
    }

}

export class Market extends Building {
    private basePurchasePrices: number[];
    private baseSalePrices: number[];
    private levelGrowth: number;
    private purchaseMod: number[];
    private saleMod: number[];

    constructor(level: number, upgradeCost: number[], basePurchasePrices: number[],
      baseSalePrices: number[], levelGrowth: number) {
        super(level, upgradeCost, "market");
        this.basePurchasePrices = basePurchasePrices;
        this.baseSalePrices = baseSalePrices;
        this.levelGrowth = levelGrowth;
        for (let i of this.purchaseMod) {
          i = 1;
        }
        for (let i of this.saleMod) {
          i = 1;
        }
    }

    purchaseValue(amount: number, res: Recurso): number {
        return this.getPurchasePrices()[res.getId()] * amount;
    }
    saleValue(amount: number, res: Recurso): number {
        return this.getSalePrices()[res.getId()] * amount;
    }
    getPurchasePrices(): number[] {
        let truePrices: number[] = this.basePurchasePrices;
        for (let i: number = 0; i < truePrices.length; i++){
            truePrices[i] *= this.purchaseMod[i];
        }
        return truePrices;
    }
    getSalePrices(): number[] {
        let truePrices = this.baseSalePrices;
        for (let i: number = 0; i < truePrices.length; i++) {
            truePrices[i] *= this.saleMod[i];
        }
        return truePrices;
    }
    applyPurchaseMod(mods: number[], time: number) {
        for (let i: number = 0; i < mods.length; i++) {
            this.purchaseMod[i] *= mods[i];
        }
        //TODO: Convertir a función asíncrona que espere a que pase el tiempo.
        for (let i: number = 0; i < mods.length; i++) {
            this.purchaseMod[i] /= mods[i];
        }
    }
    applySaleMod(mods: number[], time: number) {
        for (let i: number = 0; i < mods.length; i++) {
            this.saleMod[i] *= mods[i];
        }
        //TODO: Convertir a función asíncrona que espere a que pase el tiempo.
        for (let i: number = 0; i < mods.length; i++) {
            this.saleMod[i] /= mods[i];
        }
    }
}

export class Collector extends Building {
    private resource: Resource;
    private resYield: number[];
    private levelGrowth: number;
    private mod: number;

    constructor(level: number, upgradeCost: number[], resource: Resource, resYield: number[], levelGrowth: number) {
        super(level, upgradeCost, "collector of "+resource.getName());
        this.resYield = resYield;
        this.levelGrowth = levelGrowth;
        this.mod = 1;
    }
    yieldValue(): number{
        return this.resYield[this.level] * this.mod;
    }

    applyMod(newMod: number, time: number): void {
        this.mod *= newMod;
        //Tiempo
        this.mod /= newMod;
    }
}

export class TownHall extends Building {
    private baseResourceLimit: number;
    private baseUnitLimit: number;
    private levelResGrowth: number;
    private levelUnitGrowth: number;

    constructor(level: number, upgradeCost: number[], name: string, baseResourceLimit: number, baseUnitLimit: number, levelResGrowth: number, levelUnitGrowth: number) {
        super(level, upgradeCost, name);
        this.baseResourceLimit = baseResourceLimit;
        this.baseUnitLimit = baseUnitLimit;
        this.levelResGrowth = levelResGrowth;
        this.levelUnitGrowth = levelUnitGrowth;
    }

    getResourceLimit(): number {
        return this.baseResourceLimit + this.levelResGrowth * this.level;
    }

    getUnitLimit(): number {
        return this.baseUnitLimit + this.levelUnitGrowth * this.level;
    }
}

export class Armory extends Building {
    private mod: number[];

    constructor(level: number, upgradeCost: number[]) {
      super(level, upgradeCost, "armory");
      for (let i of this.mod){
        i = 1;
      }
    }

    getUpgradeCost(job: Job): number {
        return job.getUpgradeCost() * this.mod[job.getId()];
    }

}

export class Barracks extends Building {
  private goldMod: number[];
  private meatMod: number[];

  constructor(level: number, upgradeCost: number[]) {
    super(level, upgradeCost, "barracks");
    for (let i of this.goldMod) {
      i = 1;
    }
    for (let i of this.meatMod) {
      i = 1;
    }
  }

  getHiringCost(job: Job): number[] {
    return [job.getGoldCost() * this.goldMod[job.getId()], job.getMeatCost() * this.meatMod[job.getId()]];
  }

  hireTroop(job: Job, army: Army) {
    army.addTroop(job.newTroop());
  }

}
