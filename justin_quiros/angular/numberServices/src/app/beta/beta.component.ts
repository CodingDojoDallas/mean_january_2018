import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
	numbers: number[] = []
	

  constructor(private _dataService: DataService) { }

  genSeq2() {
	var rand = (Math.floor(Math.random() * 100));
	this._dataService.seq2.push(rand);
  }
  ngOnInit() {
  	this.numbers = this._dataService.retrieveSeq2();

  }

}
