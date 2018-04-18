import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CityService } from './city.service';

import 'rxjs/add/operator/switchMap';
import { City } from './city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city$: City;

  error: string;

  constructor(
    private _route: ActivatedRoute,
    private _cityService: CityService
  ) { }

  ngOnInit() {
    this.city$ = new City;
  
    this._route.paramMap.subscribe(
      (params: ParamMap) => {
        this._cityService.getCityInfo(params.get('id')).subscribe(
          (cityData) => {
            this.error = null;
            this.city$.id       = +params.get('id');
            this.city$.name     = cityData['name'];
            this.city$.humidity = cityData['main']['humidity'];
            this.city$.tempAvg  = cityData['main']['temp'];
            this.city$.tempHigh = cityData['main']['temp_max'];
            this.city$.tempLow  = cityData['main']['temp_min'];
            this.city$.status   = cityData['weather'][0]['description'];
            this.city$.img      = this.getImage(cityData['name']);
            // this.city$.img      = `assets/images/${this.city$.name.replace(/\s/g, '')}.jpg`
          },
          (error) => {
            this.error = "Error: " + error['error']['message'];
          }
      );
    });
  }

  getImage(city: string) {
    switch (city) {
      case 'Chicago':           return 'https://i.imgur.com/IJVkrYN.jpg';
      case 'Washington, D. C.': return 'https://i.imgur.com/4XaftFR.jpg';
      case 'Dallas':            return 'https://i.imgur.com/kdRoz58.jpg';
      case 'Burbank':           return 'https://i.imgur.com/Xd3Z63E.jpg';
      case 'San Jose':          return 'https://i.imgur.com/OqBq9gS.jpg';
      case 'Seattle':           return 'https://i.imgur.com/cyuQXYB.jpg';
      default: return '';
    }
  }

}

