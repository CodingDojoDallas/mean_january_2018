import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quote: Quote;
  @Output() AddLikes = new EventEmitter();
  @Output() SubstractLikes = new EventEmitter();
  @Output() Delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  triggerEvent(){
    this.AddLikes.emit(this.quote.id); //we can pass in any data type
  }

  triggerEvent2(){
    this.SubstractLikes.emit(this.quote.id); //we can pass in any data type
  }

  triggerEvent3(){
    this.Delete.emit(this.quote.id); //we can pass in any data type
  }

}
