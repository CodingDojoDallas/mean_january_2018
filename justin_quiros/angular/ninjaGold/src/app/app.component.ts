import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'bootstrap.min.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';

  gold: number[];

  constructor(private _dataService: DataService) {
  	this.gold = this._dataService.retrieveGold();
  	console.log(this.gold);
  }

  ngOnInit(){
  	
  }
}
