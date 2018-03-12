import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  currentZone: string;
  zones: string[] = ['PST', 'MST', 'CST', 'EST'];
  clearFlag: boolean = false;

  switchZone(zone) {
    this.clearFlag = false;
    this.time = new Date();
    let currentHour = this.time.getHours();
    switch(zone){
      case 'PST': {
        this.time.setHours(currentHour - 2);
        break;}
      case 'MST': 
        this.time.setHours(currentHour - 1);
        break;
      case 'CST':
        this.time.setHours(currentHour + 0);
        break;
      case 'EST':
        this.time.setHours(currentHour + 1);
        break;
    }
    this.currentZone = zone;
  }
  clear(){
    this.clearFlag = true;
    this.currentZone = '';
  }
}
