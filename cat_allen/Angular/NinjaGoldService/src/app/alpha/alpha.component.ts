import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  constructor(private _dataService: DataService) { }
  gold: number = 0;

  ngOnInit() {
  }

  onclick(message){
  	this.gold += this._dataService.onclick(message);
  }

  // totalgold(){
  // 	this.gold = this._dataService.getgold();
  // }

  
}
