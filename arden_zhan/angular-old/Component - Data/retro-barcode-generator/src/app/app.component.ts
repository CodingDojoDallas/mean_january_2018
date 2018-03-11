import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[];
  constructor(){
    this.colors = [];
    let allColors = ["DarkSeaGreen", "MediumAquaMarine", "Fuchsia", "Teal", "Salmon", "MidnightBlue"]
    for (let i = 0; i < 10; i++){
      this.colors.push(allColors[(Math.floor(Math.random() * 6))])
    }
    console.log(this.colors);
  }
}
