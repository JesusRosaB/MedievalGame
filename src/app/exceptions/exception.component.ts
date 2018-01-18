import {Component, DoCheck, OnInit} from '@angular/core';
import {MessagesService} from './messages.service';

@Component({
  selector: 'app-exception',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit, DoCheck {
  msgs: string[];
  cont: number;
  constructor(private Msgs: MessagesService) {
    this.cont = 0;
  }
  ngOnInit() {
    this.msgs = this.Msgs.getMessages();
    this.cont = 0;
    this.Msgs.eliminarMsg();
  }
  ngDoCheck() {
    if (this.cont !== this.Msgs.cont) {
      this.cont = this.Msgs.cont;
    }
  }
}
