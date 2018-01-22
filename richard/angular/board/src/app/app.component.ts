import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switchboard = [false, false, false, false, false, false, false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false];

  flip(index) {
    this.switchboard[index] = this.switchboard[index]? false : true;
  }
}