import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css', '../bootstrap.min.css']
})
export class ChicagoComponent implements OnInit {

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
       	       this.city.name = params.get('city');
       	       console.log(this.city.name)
   	      	})

   	      	console.log("I am here")
  	this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city.name}&APPID=bc290720a7511ba586d5f2d8ed0a86eb`).subscribe( (weather) => {
	  		console.log('weather', weather)

	  		this.city.name = weather.name
	  		this.city.humidity = weather.main.humidity;
	  		this.city.avg = weather.main.temp
	  		this.city.high = weather.main.temp_max;
	  		this.city.low = weather.main.temp_min;
	  		this.city.status = weather.weather[0].description

	  		

	  		},
	  		console.log
	  		// event.preventDefault();
		)

	 
  }




  ngOnInit() {
  }

}
