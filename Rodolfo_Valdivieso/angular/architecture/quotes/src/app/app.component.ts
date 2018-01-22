import { Component } from '@angular/core';
import { Quote } from './quotes/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quote = new Quote();
  quotes = [];
  constructor(){

  }

  onSubmit(){
  	this.quotes.push(this.quote);
  	let id = 0;
  	if(this.quotes.length>0){
  		id = this.quotes[0].id+1;
  		for(var i=0;i<this.quotes.length;i++){
  			if(this.quotes[i].id>id){
  				id = this.quotes[i].id + 1;
  			}
  		}
  	}
  	this.quote = new Quote(id,"", "", 0);
  }

  AddLikes(eventData){
    for(var i=0;i<this.quotes.length;i++){
    	if(this.quotes[i].id==eventData){
    		this.quotes[i].likes += 1;
    	}
    }
  }

  SubstractLikes(eventData){
    for(var i=0;i<this.quotes.length;i++){
    	if(this.quotes[i].id==eventData){
    		if(this.quotes[i].likes>0){
    			this.quotes[i].likes -= 1;
    		}
    	}
    }
  }

  Delete(eventData){
    let newArr = [];
    for(var i=0;i<this.quotes.length;i++){
    	if(this.quotes[i].id!=eventData){
    		newArr.push(this.quotes[i]);
    	}
    }
    this.quotes = newArr;
  }
}
