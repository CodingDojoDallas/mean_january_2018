import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user:object = {username: "", score:0, message:''};
  constructor(private _dataService: DataService){
  	this.user = this._dataService.user;
  }

  calculateScore(){
  	this._dataService.calculateScore();
  }
}
