import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
	history = [];
	color=[];
  constructor(private _dataService: DataService) { 
  	this.history = this._dataService.history;
  	this.color = this._dataService.color;
  }

  ngOnInit() {
  }

}
