import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gen-seq1',
  templateUrl: './gen-seq1.component.html',
  styleUrls: ['./gen-seq1.component.css']
})
export class GenSeq1Component implements OnInit {
	numbers: number[]=[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this.numbers = this._dataService.numbers1;
  }

  genNumber1(){
  	this._dataService.genNumber1();
  }

}
