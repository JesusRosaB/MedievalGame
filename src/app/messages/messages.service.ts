import {Injectable} from '@angular/core';

@Injectable()
export class MessagesService {
  Messages: string[] = [];
  cont: number;

  constructor() {
    this.cont = 0;
    this.Messages.push('Bienvenido al juego');
  }

  getMessages() {
    return this.Messages;
  }

  addMessage(msg: string) {
    this.Messages.push(msg);
    console.log(msg);
    ++this.cont;
  }

  eliminarMsg() {
    this.Messages = [];
    this.cont = 0;
  }
}


