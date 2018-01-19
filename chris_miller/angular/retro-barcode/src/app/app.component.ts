import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Retro Barcode';

  holder = [];
  colors: string[] = ['DarkSeaGreen', 'MediumAquaMarine', 'Fuchsia', 'Red', 'Blue', 'Pink', 'Gold']

  	constructor(){
  		this.holder = [];
	  	for (var i =0; i< 5; i++){
	  		this.holder.push(this.colors[(Math.floor(Math.random() *this.colors.length))])
	  	}
	}
}