import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'bootstrap.min.css']
})
export class AppComponent {
  title = 'Switchboard';
  boxArray: boolean[] = [false, false, false, false, false,
  			  false, false, false, false, false]


  toggle(idx) {
  	this.boxArray[idx] = !this.boxArray[idx];
  	}
  }
}
