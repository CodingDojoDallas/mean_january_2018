import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches: boolean[] = Array(10);
  constructor(){
    this.switches.fill(true);
  }

  // ternary conditional operator (?) on html
  toggle(index){
    this.switches[index] = !this.switches[index];
  }
}
