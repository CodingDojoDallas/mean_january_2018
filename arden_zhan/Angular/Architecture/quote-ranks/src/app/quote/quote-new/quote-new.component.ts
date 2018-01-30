import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  @Input() quotes;
  @Output() newQuote = new EventEmitter();
  @Output() sortQuote = new EventEmitter();

  quote = new Quote();
  add_quote() {
    this.newQuote.emit(this.quote);
    this.quote = new Quote();
    this.sortQuote.emit();
  }

  constructor() { }

  ngOnInit() {
  }
}
