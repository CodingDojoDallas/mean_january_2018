import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  goldCount =[0];
  history = [];
  color = [];
  constructor() { }

  setGoldCount(gold, building){
  	if((this.goldCount[0] + gold) < 0){
  		this.goldCount[0] = 0;
  	}
  	else{
  		this.goldCount[0] += gold;
  	}
  	let message = "";
  	let color = "green";
  	if (gold>0){
  		message = "- You've earned " + gold + " at the" + building;
  	}
  	else{
  		
  			message = "- You've lost " + gold + " at the " + building;
  			color="red";
  	}
  	this.history.push(message);
  	this.color.push(color);
  }

  retreiveGold(){
  	return this.goldCount;
  }

}
