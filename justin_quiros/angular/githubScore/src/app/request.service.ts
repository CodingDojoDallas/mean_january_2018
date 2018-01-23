import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class RequestService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  user = {
  	username: "",
  	score: 0,
  	level: "",
  	color: ""
  }


  constructor(private _http: HttpClient) { }

    calculate(){
  	this._http.get(`https://api.github.com/users/${this.user.username}`).subscribe( (user) => {
  		console.log(user)
  		let score =  user.public_repos + user.followers
  		let level = ""
  		let color = ""
  		console.log(score)

  		if(score < 20){
  			level = "Needs Work!";
  			color = 'red';
  		}
  		else if(score >= 20 && score < 50){
  			level = "A decent start!";
  			color = 'orange';
  		}
  		else if(score >= 50 && score < 100){
  			level = "Doing good!";
  			color = 'black';
  		}
  		else if(score >= 100 && score < 200){
  			level = "Great Job!";
  			color = 'green';
  		}
  		else{
  			level = "Github Elite!";
  			color = 'blue';
  		}

  		this.user.score = score;
  		this.user.level = level;
  		this.user.color = color;

  		},
  		console.log
  		event.preventDefault();
  		this.user.level = "User does not exist, pick a different Github username"
  		this.user.color = 'red'
  	); 
  }
}


