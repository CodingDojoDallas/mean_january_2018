import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: Quote[];
  @Output() destroyQuote = new EventEmitter();
  @Output() sortQuote = new EventEmitter();

  up(quote){
    quote.votes++;
    this.sortQuote.emit();
  }
  down(quote){
    quote.votes--;
    this.sortQuote.emit();
  }
  delete(quote){
    this.destroyQuote.emit(quote);
  }

  constructor() {}

  ngOnInit() {}

}
