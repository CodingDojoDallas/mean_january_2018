import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  cities = ["seattle", "sanjose", "burbank", "dallas", "dc", "chicago"];

  cityInfo: any = {};

  constructor(private _http: HttpClient) {}

  retrieveCities(): string[] {
    return this.cities;
  }

  retrieveCityInfo(){
    return this.cityInfo;
  }

  findCityInfo(city){
    let key = "1e34d590abde2d815b3cae8998df9a16";

    let cityID: number;
    switch (city) {
      case "seattle": 
        cityID = 5809844;
        break;
      case "sanjose":
        cityID = 5392171;
        break;
      case "burbank":
        cityID = 5331835;
        break;
      case "dallas":
        cityID = 4684888;
        break;
      case "dc":
        cityID = 4140963;
        break;
      case "chicago":
        cityID = 4887398;
        break;
    }

    this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}`).subscribe(
      data => { this.mapData(data); },
      // data => { this.cityInfo = data; },
      // Ask Matt why this doesn't work?

      error => { console.log(error); }
    );
  }

  mapData(data){
    this.cityInfo.name = data.name;
    this.cityInfo.humidity = data.main.humidity;
  	this.cityInfo.tempAvg = data.main.temp;
  	this.cityInfo.tempHigh = data.main.temp_max;
  	this.cityInfo.tempLow = data.main.temp_min;
  	this.cityInfo.status = data.weather[0].description;
  }


}
