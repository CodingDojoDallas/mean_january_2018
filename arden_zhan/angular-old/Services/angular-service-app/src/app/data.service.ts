import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number[] = [1, 2, 3];

  constructor() { }

  retrieveNumbers(): number[] {
    return this.numbers;
  }

  addNumber(num: number){
    this.numbers.push(num);
  }

}
