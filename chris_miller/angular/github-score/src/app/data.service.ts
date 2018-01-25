import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getUser(username, callback, errcallback){

  	this._http.get("https://api.github.com/users/" + username).subscribe(
  		(res) => {
  			var followers = res.json().followers;
  			var repos = res.json().public_repos;

  			let score = followers + repos;
  			callback(score);
  		},
  		(err) => {
  			errcallback();
  		}
  		);

  }

}

