import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
	city = 'burbank';
	humidity = '';
	temp = '';
	temp_max = '';
	temp_min = '';
	weather = '';

  constructor(private _dataService: DataService) { }


  ngOnInit() {
  	this._dataService.getWeather(this.city,
  		() => 
  		{
  			this.humidity = this._dataService.humidity;
	    	this.temp = this._dataService.temp;
	    	this.temp_max = this._dataService.temp_max;
	    	this.temp_min = this._dataService.temp_min;
	    	this.weather = this._dataService.weather;
  		},
  		(error) => 
  		{
  			console.log("error")
  		});
  }

  displayWeather()
  {

  	
  }

}
