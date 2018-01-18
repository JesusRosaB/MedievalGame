import { Injectable } from '@angular/core';
import { WoodService } from '../resources/WoodService';
import { MeatService } from '../resources/MeatService';
import { GoldService } from '../resources/GoldService';
import { QuestHall } from '../buildings/questhall';
import { Quest } from './quest';
import { Troop, Job } from '../quarter/trooptypeobject';
import { ArmyService } from '../quarter/army.service';

@Injectable()
export class QuestHallService {
  questHall: QuestHall;

  constructor(private wood: WoodService, private meat: MeatService, private gold: GoldService, private army: ArmyService) {
    this.questHall = new QuestHall(1, [1], [1], [new Quest(0, new Troop(new Job(0, 'Jabalí', 1, [33], 300, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10], [100, 110, 120, 130, 140])),
      [100, 100, 100], 'prueba', 'prueba'), new Quest(0, new Troop(new Job(0, 'Jabalí', 1, [33], 300, [4, 7, 9, 10, 10], [4, 7, 9, 10, 10], [100, 110, 120, 130, 140])),
        [100, 100, 100], 'prueba2', 'prueba2')]);
  }

  takeQuest(id: number) {
    let quest = this.questHall.getQuest(id);
    console.log(this.army.isAlive());
    console.log(quest.getEnemy().isAlive());
    let result = quest.attempt(this.army);
    console.log(result.description);
    if (result.won) {
      this.meat.increase(quest.getReward(this.meat.resource().getId() - 1));
      this.wood.increase(quest.getReward(this.wood.resource().getId() - 1));
      this.gold.increase(quest.getReward(this.gold.resource().getId() - 1));
      console.log("Misión completada");
      this.questHall.removeQuest(id);
    }
  }

  questList() {
    return this.questHall.getAllQuests();
  }
}
