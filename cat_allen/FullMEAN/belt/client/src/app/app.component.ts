import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _route: Router,
  	private _location: Location,
  	private _userService: UserService) {}

  ngOnInit() {
  	this._userService.getCurrentUser(
  		(user) => {
  			console.log(this._userService.currentUser);
  			if (!user) {
  				this._route.navigateByUrl('/');
  				return;
  			}

  			this._location.back();
  		},
  		console.log
  	);
  }
  	
}
