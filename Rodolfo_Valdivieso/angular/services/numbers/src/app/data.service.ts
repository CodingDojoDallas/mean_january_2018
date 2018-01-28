import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  sequence1:  number[] = [];
  sequence2:  number[] = [];
  result:  number ;

  constructor() { }

  generateSequence1(){
  	this.sequence1.push(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
  }

  generateSequence2(){
  	this.sequence2.push(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
  }

  gnerateDifference(){
  	let s1 = 0;
  	let s2 = 0;
  	for (var i=0;i<this.sequence1.length;i++){
  		s1 += this.sequence1[i];
  	}

  	for (var i=0;i<this.sequence2.length;i++){
  		s2 += this.sequence2[i];
  	}
  	
  	this.result = s1 - s2;
  	return this.result;

  }

}
