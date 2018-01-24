import { Building } from './building';
import { Quest } from '../questhall/quest';

export class QuestHall extends Building {
  private quests: Quest[];
  private mod: number[];

  constructor(level: number, upgradeCostWood: number[], upgradeCostGold: number[], quests: Quest[]) {
    super(level, upgradeCostWood, upgradeCostGold, 'quest hall');
    this.quests = quests;
    this.mod = [1, 1, 1];
  }

  getQuest(id: number) : Quest {
    return this.quests[id];
  }

  getAllQuests(): Quest[] {
    return this.quests;
  }

  completeQuest(id: number): void {
    this.quests[id].completed = true;
  }
}
