import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'bootstrap.min.css']
})
export class AppComponent {
  title = 'Click Event Practice!';
  pstColor: string = 'grey'
  cstColor: string = 'grey'
  estColor: string = 'grey'
  mstColor: string = 'grey'

  date = new Date()

  // newDate(tzone){
  // 	date = 
  // }

  onButtonClick(data){
  	if(data == 'PST'){
  		this.date = new Date().setHours(this.date.getHours() - 2);
  		this.pstColor = 'yellow'
  		this.mstColor = 'grey'
  		this.cstColor = 'grey'
  		this.estColor = 'grey'
  	}
  	if(data == 'MST'){
  		this.date = new Date().setHours(this.date.getHours() - 1);
  		this.pstColor = 'grey'
  		this.mstColor = 'yellow'
  		this.cstColor = 'grey'
  		this.estColor = 'grey'
  	}
  	if(data == 'CST'){
  		this.pstColor = 'grey'
  		this.mstColor = 'grey'
  		this.cstColor = 'yellow'
  		this.estColor = 'grey'
  	}
  	if(data == 'EST'){
  		this.date = new Date().setHours(this.date.getHours() + 1);
  		this.pstColor = 'grey'
  		this.mstColor = 'grey'
  		this.cstColor = 'grey'
  		this.estColor = 'yellow'
  	}
  	if(data == 'CLEAR'){
  		this.date = new Date()
  		this.pstColor = 'grey'
  		this.mstColor = 'grey'
  		this.cstColor = 'grey'
  		this.estColor = 'grey'
  	}
  }
}













