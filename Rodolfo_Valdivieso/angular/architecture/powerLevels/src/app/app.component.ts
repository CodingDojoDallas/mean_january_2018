import { Component } from '@angular/core';
import { Fighter } from './fighter/fighter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Component';
  numbers = [];
  fighters = [];
  level = 1;
	  constructor(){
	  for  (var i=0;i<10;i++){
	  	this.numbers.push(i);
	  }
	  
	  this.generateFighter(1);
	}

	calculatePowers(){
	  this.fighters = [];
	  this.generateFighter(this.level);
	}

	generateFighter(level){
	  let f1 = new Fighter("Human", level, 1);
	  let f2 = new Fighter("Saiyan", level, 10);
	  let f3 = new Fighter("SuperSaiyan", level, 90);
	  let f4 = new Fighter("SuperSaiyanTwo", level, 150);
	  let f5 = new Fighter("SuperSaiyanThree", level, 250);
	  let f6 = new Fighter("SuperSaiyanFour", level, 500);
	  this.fighters.push(f1);
	  this.fighters.push(f2);
	  this.fighters.push(f3);
	  this.fighters.push(f4);
	  this.fighters.push(f5);
	  this.fighters.push(f6);
	}
}
