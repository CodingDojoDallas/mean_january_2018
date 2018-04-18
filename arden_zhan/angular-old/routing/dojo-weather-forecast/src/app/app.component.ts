import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cities: string[] = [];

  constructor(private _dataService: DataService){ }

  ngOnInit() {
    this.cities = this._dataService.retrieveCities();
  }
  
}
