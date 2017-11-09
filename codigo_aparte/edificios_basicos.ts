/*
Implementación incompleta de todos los edificios para ponerse en componentes.
Cosas pendientes:
- Los constructores.
- La implementación de los eventos modificadores. ¿Mover los modificadores
  a otra clase? ¿Usar función timeout?
- El Cuartel
  (Hay que revisar la clase Cuartel en el diagrama, tal como está ahora no hay
  ningún edificio que te permita comprar distintas unidades según su nivel.)
- La implementación que he hecho de Armeria no me acaba de convencer. ¿Debería pasarse una
  Tropa cuando estamos mejorando su clase en general?
- Se necesitan algunos métodos extra en Recursos y Tropa. Concretamente un
  identificador de Recurso y un identificador de tipo de Tropa.
*/
export class Edificio {
    protected level: number;
    protected upgradeCost: number[];
    protected name: string;

    getLevel(): number {
        return this.level;
    }

    levelUp(): void {
        this.level++;
    }

}

export class Mercado extends Edificio {
    private basePurchasePrices: number[];
    private baseSalePrices: number[];
    private levelGrowth: number;
    private purchaseMod: number[];
    private saleMod: number[];

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

export class Recolector extends Edificio {
    private baseYield: number;
    private levelGrowth: number;
    private mod: number;

    yieldValue(): number{
        return this.baseYield * this.level * this.mod;
    }

    applyMod(newMod: number, time: number): void {
        this.mod *= newMod;
        //Tiempo
        this.mod /= newMod;
    }
}

export class Ayuntamiento extends Edificio {
    private baseResourceLimit: number;
    private baseUnitLimit: number;
    private levelResGrowth: number;
    private levelUnitGrowth: number;

    getResourceLimit(): number {
        return this.baseResourceLimit + this.levelResGrowth * this.level;
    }

    getUnitLimit(): number {
        return this.baseUnitLimit + this.levelUnitGrowth * this.level;
    }
}

export class Armeria extends Edificio {
    private unitUpgradeCost: number[];
    private costGrowth: number[];

    public getUpgradeCost(unit: Tropa): number {
        return this.unitUpgradeCost[unit.jobId()] + this.costGrowth[unit.jobId()] * unit.getLevel();
    }

}
