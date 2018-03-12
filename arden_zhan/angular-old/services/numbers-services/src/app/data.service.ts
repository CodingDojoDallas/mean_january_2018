import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  alpha: number[] = [];
  beta: number[] = [];
  result: number;

  constructor() { }

  generateNumbers(sequence){
    let array = (sequence == "alpha") ? this.alpha : this.beta;
    array.push(Math.floor(Math.random() * (101))); // 0 - 100
  }

  generateDifference(){
    let total = this.alpha.reduce((a,b) => a + b, 0) - this.beta.reduce((a,b) => a + b, 0);
    return total;
  }

}
