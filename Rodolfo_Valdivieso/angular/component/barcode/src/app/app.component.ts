import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode';
  arr: string[] = [];
  colors: string[] = ['azure','bisque','beige','brown','coral','cyan','chocolate','gold','red','yellow','white','green','indigo','magenta','orange','silver','black','aqua' ]
  constructor(){
  	var index = 0;
  	for (var i=0;i<10;i++){
  		index = Math.floor(Math.random()*14)+1;
  		this.arr.push(this.colors[index]);
  	}
  }
  
}
