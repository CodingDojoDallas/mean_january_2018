import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './dallas/city';

@Injectable()
export class DataService {
  city = new City();
  constructor(private _http: HttpClient) { }

  getWeather(city){
  	this.city.name = "Dallas";  
  	this.city.state = "TX";
  	this.city.humidity = 10;
  	this.city.tempHigh = 10;
  	this.city.tempLow = 10;
  	this.city.status = "Status";
  	this.city.image = "Image";
  	this.city.image = city;
  	if (city=='sanjose'){
  		city='san jose';  
  	}

  	this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=682aaf97d95e8f1c555f69431c2a079e').subscribe( (task: any[]) => { this.displayInfo(task); }, console.log );

  }
  displayInfo(data){
  	//console.log(data);
  	this.city.name = data.name;
  	this.city.humidity = data.main.humidity;
  	this.city.temp = data.main.temp;
  	this.city.tempHigh = data.main.temp_max;
  	this.city.tempLow = data.main.temp_min;
  	this.city.status = data.weather[0].description;

  }


}
