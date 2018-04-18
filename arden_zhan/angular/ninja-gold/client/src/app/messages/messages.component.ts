import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';
import { Message } from './message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(){
    this.messages = this._goldService.retrieveMessages();
  }

}
