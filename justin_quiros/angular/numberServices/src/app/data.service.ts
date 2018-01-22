import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	seq1: number[] = []
	seq2: number[] = []
	result: number = 0
  constructor() { }

  retrieveSeq1(){
  	return this.seq1;
  }

  retrieveSeq2(){
  	return this.seq2;
  }

  difference(){
  	var seq1tot = 0;
  	var seq2tot = 0;

  	for(let i = 0; i < this.seq1.length; i++){
  		seq1tot += this.seq1[i]
  	}
  	for(let j = 0; j < this.seq2.length; j++){
  		seq2tot += this.seq2[j]
  	}

  	this.result = seq1tot - seq2tot
  	return this.result
  }
}
