import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	messages: string[] = [];
  constructor() { }

  onclick(building){
	let gold: number = 0;
		if(building == 'farm'){
			gold += (Math.floor(Math.random()*3))+2;
			let message = `You\'ve earned ${gold} gold from your swanky adventures at the ${building}!`;
			this.messages.push(message);
			return gold;
		}
		else if(building == 'cave'){
			gold += (Math.floor(Math.random()*6))+5;
			let message = `You\'ve earned ${gold} gold from your swanky adventures at the ${building}!`;
			this.messages.push(message);
			return gold;
		}
		else if(building == 'casino'){
			let min = -100;
			let max = 100;
			gold += Math.floor(Math.random()*(max - min)) + min;
				if (gold > 0){
					let message = `You\'ve earned ${gold} gold from your swanky adventures at the ${building}!`
				this.messages.push(message);
				}
				else{
					let message = `You\'ve lost ${gold} gold from your swanky adventures at the ${building}!`
				this.messages.push(message);
				}
			return gold;
		}
		else if(building == 'house'){
			gold += (Math.floor(Math.random()*9))+7;
			let message = `You\'ve earned ${gold} gold from your swanky adventures at the ${building}!`;
			this.messages.push(message);
			return gold;
		}

	}

	addMessage(message){
  		return this.messages;
  	}

  	getgold(){
  		return this.gold;
  	}

}

