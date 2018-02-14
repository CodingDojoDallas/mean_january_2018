import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  	title: string = "Burbank"
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

  constructor(private _dataService: DataService) {
  	this._dataService.getWeather(this.title);
  }

  ngOnInit() {
 	this.city = this._dataService.city;
  }

}
