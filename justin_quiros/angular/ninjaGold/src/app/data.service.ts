import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  gold: number[] = [0];
  activity: string[] = []

  constructor() { }

  retrieveGold(){
  	return this.gold;
  }

  incrementGold(gold){
  	this.gold[0] += gold;
  	console.log(this.gold[0])
  }
}
