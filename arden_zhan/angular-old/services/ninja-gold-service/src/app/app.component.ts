import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goldCount = {gold: null};

  constructor(private _dataService: DataService) { 
    this.goldCount = this._dataService.retrieveGold();
  }
}
