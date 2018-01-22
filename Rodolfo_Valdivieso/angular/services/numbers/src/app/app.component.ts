import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  result: number;
  constructor(private _dataService: DataService){
  	
  }

  ngOnInit() {
  	this.result = this._dataService.result;
  }

  gnerateDifference(){
  	this.result = this._dataService.gnerateDifference();
  }
}
