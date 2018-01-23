import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city:object = new City();
  city2 = "";
  params;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
  	
  	this._route.paramMap.subscribe( params => {
       	this.city2 = params.get('city');

       	if(this.city2 == null){
  			this.city2 = "dallas";
  		}
  		this._dataService.getWeather(this.city2);
  		this.city = this._dataService.city;
   	});
  }

  ngOnInit() {

  }
}