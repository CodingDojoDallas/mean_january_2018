import { Component, OnInit } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
      {content: 'To be, or not to be.', author: 'Hamlet', votes: -2},
      {content: 'There are risks and costs to action. But they are far less than the long range risks of comfortable inaction.', author: 'JFK', votes: 2},
  ];
  // quote = new Quote();

  create(quote){
    this.quotes.push(quote);
    // this.quote = new Quote();
  }

  destroy(quote){
    this.quotes.splice(this.quotes.indexOf(quote), 1);
    // this.quote = new Quote();
  }

  sort(){
    // compareFunction put greater votes value first
    this.quotes.sort(function(a,b){
      return b.votes - a.votes;
    });
  }

  constructor() {}

  ngOnInit() {
    this.sort();
  }

}
