import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css', '../bootstrap.min.css']
})
export class QuoteComponent implements OnInit {

	
	quote = new Quote();
	quotes = []
	onSubmit() {
		this.quotes.push(this.quote);
		this.quote = new Quote();
		console.log(this.quotes);
	}

  constructor() { }

  ngOnInit() {
  }

}
