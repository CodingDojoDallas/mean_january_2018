import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  gold=[];
  constructor(private _dataService: DataService){
  	this.gold = this._dataService.goldCount;
  }

  ngOnInit() {
  	this.gold = this._dataService.retreiveGold();
  }

  
}
