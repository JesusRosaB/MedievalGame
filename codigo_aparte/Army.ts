import {error} from 'selenium-webdriver';
import UnsupportedOperationError = error.UnsupportedOperationError;
import {MetadataOverride} from '@angular/core/testing';

export abstract class Army {
  getPower(): number {return 0; }
  Add(troop: Army) {}
  Remove(troop: Army) {}
}

export abstract class Troop extends Army {
  protected Power: number;
  protected Level: number;
  protected IncrementPower_per_Level: number;
  protected GoldCost: number;
  protected MeatCost: number;
  protected IncrementGoldCost_per_Level: number;
  protected IncrementMeatCost_per_Level: number;
  getPower(): number {
    return this.Power + (this.IncrementPower_per_Level * this.Level);
  }
  Add() {
    throw UnsupportedOperationError;
  }
  Remove() {
    throw UnsupportedOperationError;
  }
  Constructor(power: number, level: number, gc: number, mc: number, incrementPL: number,
  incrementGCL: number, incrementMCL: number) {
    this.Level = level;
    this.Power = power;
    this.GoldCost = gc;
    this.MeatCost = mc;
    this.IncrementPower_per_Level = incrementPL;
    this.IncrementGoldCost_per_Level = incrementGCL;
    this.IncrementMeatCost_per_Level = incrementMCL;
  }
}

export class Soldier extends Troop {}

export class Archer extends Troop {}

export class Lancer extends Troop {}

export class LightCavalry extends Troop {}

export class HeavyCavalry extends Troop {}

export class Paladin extends Troop {}
