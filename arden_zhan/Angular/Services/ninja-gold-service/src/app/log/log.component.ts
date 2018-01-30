import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  log = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.log = this._dataService.retrieveLog();
  }

}
