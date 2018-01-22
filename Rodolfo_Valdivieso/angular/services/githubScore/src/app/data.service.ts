import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  user =  { username: "", score:0, message:'', color:""};
  
  constructor(private _http: HttpClient) { 
  	
  }

  calculateScore(){
  	this._http.get('http://api.github.com/users/'+this.user.username).subscribe( (task: any[]) => { this.displayInfo(task); }, console.log );
  }

  displayInfo(info){
  	if(info){
  		let score = info.public_repos + info.followers;
  		let message ="";
  		let color = "";
  		if(score<20){
  			message = "Needs Work!";
  			color = "red";
  		}
  		else if(score<50){
  			message = "A decent start!";
  			color = "orange";
  		}
  		else if(score<100){
  			message = "Doing Good!";
  			color = "black";
  		}
  		else if(score<200){
  			message = "Great Job!";
  			color = "green";
  		}
  		else{
  			message = "Github Elite!";
  			color = "blue";
  		}
  		this.user.score = score;
  		this.user.message = message;
  		this.user.color = color;

  	}
  	
  }

}
