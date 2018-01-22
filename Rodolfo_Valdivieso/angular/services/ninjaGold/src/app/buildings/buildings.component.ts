import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  farm(){
  	let gold = this.randomNumber(2,5);
  	this._dataService.setGoldCount(gold, "farm");

  }

  cave(){
  	let gold = this.randomNumber(5,10);
  	this._dataService.setGoldCount(gold, "cave");
  }

  casino(){
  	let gold = this.randomNumber(-100,100);
  	this._dataService.setGoldCount(gold, "casino");
  }

  house(){
  	let gold = this.randomNumber(7,15);
  	this._dataService.setGoldCount(gold, "house");
  }

  randomNumber(min, max){
  	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
