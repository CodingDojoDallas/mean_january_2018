import { Component, OnInIt } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'bootstrap.min.css']
})
export class AppComponent implements OnInIt {
  title = 'Retro Barcode Generator';

  colors = ['Coral', 'Cornflowerblue', 'Crimson', 'Cyan', 
  			'DarkGoldenRod', 'DarkTurquoise', 'AliceBlue', 
  			'BlueViolet', 'DarkGreen', 'DarkRed', 'DimGrey',
  			'GreenYellow', 'LightPink', 'MediumPurple', 'Navy', 
  			'Olive', 'PeachPuff', 'Violet']

  colorArray = []

  randomColor(){
  	for(let i = 0; i < this.colors.length; i++){
  		var rand = (Math.floor(Math.random() * this.colors.length));
  		this.colorArray.push(this.colors[rand]);
  	}
  }


  ngOnInit() {
  	this.randomColor();
  }
}
