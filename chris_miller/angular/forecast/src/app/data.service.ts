import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class DataService {
	humidity = '';
	temp = '';
	temp_max = '';
	temp_min = '';
	weather = '';

  constructor(private _http: Http) { }

  getWeather(city, callback, errorback){

  	this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial&APPID=897b6ba9c20549c0612fb11e646d3293').subscribe(
  		(res) => {
  			// console.log(res._body.json());
  			this.humidity = res.json().main.humidity;
  			this.temp = res.json().main.temp;
  			this.temp_max = res.json().main.temp_max;
  			this.temp_min = res.json().main.temp_min;
  			this.weather = res.json().main.weather;

  			callback();
  		},
  		(err) => {
  			console.log('error');
  		}
  		);
	
	}	

}



