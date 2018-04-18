import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = {username: "", score: null};
  
  constructor(private _dataService: DataService) { }

  ngOnInit(){
    this.user = this._dataService.user;
  }

  calculate(){
    let test = this._dataService.retrieveUser(this.user.username);
    this.user.username = "";
  }
}
