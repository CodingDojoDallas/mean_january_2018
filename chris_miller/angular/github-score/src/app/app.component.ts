import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  score = 0;
  name = '';
  message = '';

  constructor(private _dataService: DataService) {}

  calculate(){
  	this._dataService.getUser(this.name,
  		(score) => 
  		{
  			this.score = score;

  			if (score < 20)
  			{
  				this.message = "Needs Work!";
  			}
  			else
  			{
  				this.message = "Great!"
  			}


  		},
  		(error) =>
  		{
  			console.log("go away!")
  		}

  		);
  }
}
