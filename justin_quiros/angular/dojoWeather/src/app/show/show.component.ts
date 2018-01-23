import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css', '../bootstrap.min.css']
})
export class ShowComponent implements OnInit {

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

	constructor(private _http: HttpClient,
				private _route: ActivatedRoute) {

		this._route.paramMap.subscribe( params => {
			let city = params.get('city');

			this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bc290720a7511ba586d5f2d8ed0a86eb`).subscribe( (weather) => {
				console.log('weather', city)

				this.city.name = weather.name

				if(city == 'washington'){
					this.city.name = 'washington'
				}

				this.city.humidity = weather.main.humidity;
				this.city.avg = weather.main.temp
				this.city.high = weather.main.temp_max;
				this.city.low = weather.main.temp_min;
				this.city.status = weather.weather[0].description

			},
			console.log
			)


			console.log(this.city.name);
		});
	}


  ngOnInit() {
  }

}
