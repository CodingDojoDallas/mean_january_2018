import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css', '../bootstrap.min.css']
})
export class BuildingsComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  farm(){
  	var newgold = this.random(2,6);
  	this._dataService.incrementGold(newgold);
  	var result = `You've earned ${newgold} at the Farm`
  	this._dataService.activity.push(result)
  	console.log(this._dataService.activity)
  }

  cave(){
  	var newgold = this.random(5,11);
  	this._dataService.incrementGold(newgold);
  	var result = `You've earned ${newgold} at the Cave`
  	this._dataService.activity.push(result)
	
  }

  casino(){
  	var result;
  	var newgold = this.random(-100,101);
  	this._dataService.incrementGold(newgold);
  	if(newgold > 0){
  		result = `You've earned ${newgold} at the Casino!`
  	}
  	else{
  		result = `You've lost ${newgold} at the Casino!`
  	}
  	this._dataService.activity.push(result)
  }

  house(){
  	var newgold = this.random(7,16);
  	this._dataService.incrementGold(newgold);
  	var result = `You've earned ${newgold} at the House`
  	this._dataService.activity.push(result)
  }

  random(min, max){
  	return (Math.floor(Math.random() * (min-max))+ max)
  }

  ngOnInit() {
  }

}
