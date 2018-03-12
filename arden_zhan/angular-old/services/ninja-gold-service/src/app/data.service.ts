import { Injectable } from '@angular/core';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Injectable()
export class DataService {
  goldCount = {gold: 0};
  log = [];

  constructor() { }

  retrieveGold(){
    return this.goldCount;
  }
  retrieveLog(){
    return this.log;
  }

  updateGold(building: string){
    let gold: number;

    switch (building) {
      case "farm": {
        gold = this.randomNum(2, 5);
        break;
      }
      case "cave": {
        gold = this.randomNum(5, 10);
        break;
      }
      case "casino": {
        gold = this.randomNum(-100, 100);
        break;
      }
      case "house": {
        gold = this.randomNum(7, 15);
        break;
      }
      default: break;
    }
    let color = (gold > 0) ? "green" : "red";
    let message = "You've " + ((gold > 0) ? "earned " : "lost ") + gold + " gold at the " + (building.charAt(0).toUpperCase() + building.slice(1));
    this.goldCount.gold += gold;
    this.log.push({message: message, color: color})
  }

  randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
