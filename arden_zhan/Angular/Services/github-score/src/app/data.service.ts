import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  user = {username: "", score: null};
  
  constructor(private _http: HttpClient) { }

  retrieveUser(username) {
    this._http.get(`https://api.github.com/users/${username}`).subscribe(
      (user) => {
        this.user.score = user.public_repos + user.followers;
      },
      (error) => {
        console.log(error);
        this.user.score = -1;
      }
    )
  } 

}
