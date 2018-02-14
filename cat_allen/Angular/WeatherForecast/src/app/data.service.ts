import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }
  	city = {
		name: "",
		state: "",
		humidity: 0,
		avg: 0,
		high: 0,
		low: 0,
		status: "",
		img: ""
	}
	getWeather(title){
		this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${title}&APPID=23693b29ebea722f5ac21e8c75999e90`).subscribe((weather) =>{console.log(weather)
			this.city.name = weather.name;
			this.city.humidity = weather.main.humidity;
			this.city.avg = weather.main.temp;
			this.city.high = weather.main.temp_max;
			this.city.low = weather.main.temp_min;
			this.city.status = weather.weather[0].description;
			this.city.img = weather.weather[0].icon;
			return this.city;
		})

	}


}
