import {ErrorHandler, Injectable} from '@angular/core';
import {MessagesService} from '../messages/messages.service';

@Injectable()
export class Exception implements ErrorHandler {
  constructor(private msg: MessagesService) {}
  handleError(error) {
    this.msg.addMessage(error);

    throw error;
  }

}
