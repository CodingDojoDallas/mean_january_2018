import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})

export class BetaComponent implements OnInit {
	building;
  constructor(private _dataService: DataService) { }
  activity: string[] = [];

  ngOnInit() {
    this.activity = this._dataService.addMessage();
  }

  blah(){
  	this._dataService.onclick(this.building);
  }

}
