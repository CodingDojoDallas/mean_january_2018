import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  sequence: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.sequence = this._dataService.beta;
  }

  generateNum(){
    this._dataService.generateNumbers("beta");
  }
}
