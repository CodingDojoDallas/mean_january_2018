import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'app-city-nav',
  templateUrl: './city-nav.component.html',
  styleUrls: ['./city-nav.component.css']
})
export class CityNavComponent implements OnInit {
  cityList: City[];

  constructor(private _cityService: CityService) { }

  ngOnInit() {
    this.cityList = this._cityService.getCityList();
  }

}
