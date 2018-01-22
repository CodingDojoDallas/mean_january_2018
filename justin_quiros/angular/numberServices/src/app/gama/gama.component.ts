import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-gama',
  templateUrl: './gama.component.html',
  styleUrls: ['./gama.component.css']
})
export class GamaComponent implements OnInit {
  result: number = 0

  constructor(private _dataService: DataService) { }

  calculate(){
  	this.result = this._dataService.difference();
  	
  }
  
  ngOnInit() {

  }

}
