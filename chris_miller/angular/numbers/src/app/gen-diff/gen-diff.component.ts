import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gen-diff',
  templateUrl: './gen-diff.component.html',
  styleUrls: ['./gen-diff.component.css']
})
export class GenDiffComponent implements OnInit {
	total: number = 0;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  genDiff(){
  	this.total = this._dataService.genDiff();
  }

}
