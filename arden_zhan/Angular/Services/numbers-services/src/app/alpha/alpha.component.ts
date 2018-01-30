import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  sequence: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.sequence = this._dataService.alpha;
  }

  generateNum(){
    this._dataService.generateNumbers("alpha");
  }

}
