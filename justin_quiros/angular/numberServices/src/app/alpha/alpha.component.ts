import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
	numbers: number[] = []

  genSeq1() {
	var rand = (Math.floor(Math.random() * 100));
	this._dataService.seq1.push(rand);
  }

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this.numbers = this._dataService.retrieveSeq1();
  }

}
