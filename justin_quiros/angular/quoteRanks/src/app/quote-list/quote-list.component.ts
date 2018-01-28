import { Component, OnInit, Input } from '@angular/core';
// import { Quote } from '../quote/';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css', '../bootstrap.min.css']
})
export class QuoteListComponent implements OnInit {

	@Input() quotes: any;
	
  constructor() { }

  ngOnInit() {
  }

}
