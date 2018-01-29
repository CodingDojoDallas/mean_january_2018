import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-gen-seq2',
  templateUrl: './gen-seq2.component.html',
  styleUrls: ['./gen-seq2.component.css']
})
export class GenSeq2Component implements OnInit {
	numbers: number[]=[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this.numbers = this._dataService.numbers2;
  }

  genNumber2(){
  	this._dataService.genNumber2();
  }

}
