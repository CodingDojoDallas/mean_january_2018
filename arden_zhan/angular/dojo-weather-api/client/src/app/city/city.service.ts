import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CityService {
  cityList = [
    new City(5809844, "Seattle"),
    new City(5392171, "San Jose"),
    new City(5331835, "Burbank"),
    new City(4684888, "Dallas"),
    new City(4140963, "DC"),
    new City(4887398, "Chicago")
  ];

  constructor(private _http: HttpClient) {
  }
  
  getCityList(){
    return this.cityList;
  }

  getCityInfo(cityID){
    let key = "1e34d590abde2d815b3cae8998df9a16";
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}&units=imperial`)
  }

}

