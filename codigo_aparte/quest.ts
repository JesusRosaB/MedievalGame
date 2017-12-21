export class Quest {
    private enemyGroup: ArmyComponent;
    private questTime: number;
    private reward: number[];
    private description: string;

    public getEnemyPower(): number {
        return this.enemyGroup.getPower();
    }

    public getDescription(): string {
        return this.description;
    }

    public getReward(resource: Resource): number {
        return this.reward[resource.id()];
    }

    
    public getQuestTime(): number {
      return this.questTime;
    }
    public takeQuest(squad: ArmyComponent) {
        squad.setBusy(true);
        //Esperar un tiempo
        //Pongo por ahora una representación de batallas como objetos, porque no sé como vamos a representarlas
        let questBattle: Battle = new Battle(squad, this.enemyGroup);
        //Suponiendo una función result() que devuelve 0 si ganas 
        if (questBattle.result() == 0) {
            //Añadir la recompensa a los recursos
            squad.setBusy(false);
        }
    }
}