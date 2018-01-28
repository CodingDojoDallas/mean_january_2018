import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  timezone = '';

  zone(tz) {
    this.time = new Date();
    if (tz === 'PST') {
      this.time.setHours(this.time.getHours() - 2);
    } else if (tz === 'MST') {
      this.time.setHours(this.time.getHours() - 1);
    } else if (tz === 'EST') {
      this.time.setHours(this.time.getHours() + 1);
    }
    this.timezone = tz;
  }
}