import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  time:any = new Date();
  pstColor = 'gray';
  mstColor = 'gray';
  cstColor = 'gray';
  estColor = 'gray';

  displayTimePST(){
  	this.clearColors();
  	this.pstColor = 'yellow';
  	let d = new Date();
  	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  	this.time = new Date(utc + (3600000*-8));
  }
  displayTimeMST(){
  	this.clearColors();
  	this.mstColor = 'yellow';
  	let d = new Date();
  	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  	this.time = new Date(utc + (3600000*-7));
  }
  displayTimeCST(){
  	this.clearColors();
  	this.cstColor = 'yellow';
  	let d = new Date();
  	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  	this.time = new Date(utc + (3600000*-6));
  }
  displayTimeEST(){
  	this.clearColors();
  	this.estColor = 'yellow';
  	let d = new Date();
  	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  	this.time = new Date(utc + (3600000*-5));
  }
  clear(){
  	this.clearColors();
  	this.time = new Date();
  }
  clearColors(){
  	  this.pstColor = 'gray';
	  this.mstColor = 'gray';
	  this.cstColor = 'gray';
	  this.estColor = 'gray';
  }
}
