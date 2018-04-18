import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
  result: number = null;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  generateDifference(){
    this.result = this._dataService.generateDifference();
  }

}
