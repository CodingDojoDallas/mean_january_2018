import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	numbers1: number[] = [];
	numbers2: number[] = [];
	total: number = 0;

  constructor() { }

  genNumber1() {
  	var num = (Math.floor(Math.random() * 10) + 1);
  	this.numbers1.push(num);
  }

  genNumber2() {
  	var num = (Math.floor(Math.random() * 10) + 1);
  	this.numbers2.push(num);
  }

  genDiff() {
  	let sum1 = 0, sum2 = 0;

  	for (var i = 0; i < this.numbers1.length; i++)
  	{
  		sum1 += this.numbers1[i];
  	}

  	for (var i = 0; i < this.numbers2.length; i++)
  	{
  		sum2 += this.numbers2[i];
  	}

  	this.total = sum1 - sum2;
  	return this.total;
  }
}
