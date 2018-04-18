import { Injectable } from '@angular/core';
import { Building } from './buildings/building';
import { Message } from './messages/message';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoldService {
  goldCount = {gold: 0};
  messages: Message[] = [];

  constructor(private _http: HttpClient) { }

  retrieveGold() {
    return this.goldCount;
  }

  retrieveMessages() {
    return this.messages;
  }

  updateGold(building: Building) {
    let message: Message = new Message;
    message.building = building.name;
    message.gold = this.randomNumber(building.minGold, building.maxGold);

    this.addMessage(message);

    this.goldCount.gold += message.gold;
  }

  addMessage(message: Message) {
    this._http.post<Message>('/messages', message).subscribe(
      savedMessage => {
        this.messages.push(savedMessage);
      },
      error => console.log(error)
    );
  }
  
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
