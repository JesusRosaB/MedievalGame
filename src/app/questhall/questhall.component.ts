import { Component, OnInit } from '@angular/core';
import { QuestHallService } from './questhall.service';
import { Quest } from './quest';

@Component({
  selector: 'app-questhall',
  templateUrl: './questhall.component.html',
  styleUrls: ['./questhall.component.css'],
})
export class QuestHallComponent implements OnInit {
  private quests: Quest[];

  constructor(private servicio: QuestHallService) { }

  ngOnInit() {
    this.quests = this.servicio.questList();
  }

  takeQuest(id :number) {
    this.servicio.takeQuest(id);
  }

}
