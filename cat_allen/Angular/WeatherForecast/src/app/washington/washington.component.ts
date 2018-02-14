import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  	title: string = "Washington"
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
