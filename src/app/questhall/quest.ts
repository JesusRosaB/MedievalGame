import { Battle, Result } from "./battle";
import { ArmyElement } from "../quarter/ArmyElement";
import { ArmyService } from "../quarter/army.service";
import { WoodService } from "../resources/WoodService";
import { GoldService } from "../resources/GoldService";
import { MeatService } from "../resources/MeatService";
import { Resources } from "../resources/resources";


export class Quest {
    private id: number;
    private enemyGroup: ArmyElement;
   // private questTime: number;
    private reward: number[];
    private name: string;
    private description: string;

    constructor(id: number, enemyGroup: ArmyElement, reward: number[], name: string, description: string) {
      this.id = id;
      this.enemyGroup = enemyGroup;
      this.reward = reward;
      this.name = name;
      this.description = description;
    }

    public getId() {
      return this.id;
    }

    public getEnemy(): ArmyElement {
      return this.enemyGroup
    }
    public getEnemyPower(): number {
        return this.enemyGroup.getPower();
    }

    public getEnemyHealth(): number {
      return this.enemyGroup.getCurrentHealth();
    }

    public getName(): string {
      return this.name;
    }
    public getDescription(): string {
        return this.description;
    }

    public getReward(id : number): number {
        return this.reward[id];
    }

    
    /*public getQuestTime(): number {
      return this.questTime;
    }*/
    public attempt(squad: ArmyElement): Result {
        //squad.setBusy(true);
        //Esperar un tiempo
      let questBattle: Battle = new Battle(squad, this.enemyGroup);
      questBattle.execute();
      return questBattle.getResult();
      //squad.setBusy(false);

    }
}
