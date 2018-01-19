import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  boxes:number = 10;
  arr:any[] = [];
  classes:any[] = [];

  constructor(){
  	for (var i=0;i<=this.boxes;i++){
  		this.arr.push('Off');
  		this.classes.push(false);
  	}
  }

  turnOnOff(index){
  	if (this.arr[index]=='Off'){
  		this.arr[index]='On';
  		this.classes[index]=true;
  	}
  	else{
  		this.arr[index]='Off';
  		this.classes[index]=false;
  	}
  	
  }
  
}
