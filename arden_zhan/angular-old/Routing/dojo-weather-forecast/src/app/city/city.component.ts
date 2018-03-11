import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities = [];
  city: string = null;
  cityInfo = {};

  constructor( private _route: ActivatedRoute, private _dataService: DataService ) { }

  ngOnInit() {
    this.cities = this._dataService.retrieveCities();

    this._route.paramMap.subscribe(
      params => {
        if (this.cities.includes(params.get('city'))) {
          this.city = params.get('city');
          this._dataService.findCityInfo(this.city);
          this.cityInfo = this._dataService.retrieveCityInfo();
        }
      },
      errors => { console.log(errors); }
    );

  }

}
