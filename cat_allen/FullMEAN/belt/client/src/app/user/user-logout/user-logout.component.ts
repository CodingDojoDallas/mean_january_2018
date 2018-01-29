import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(
  	private _userService: UserService,
  	private _route: Router
  ) { }

  ngOnInit() {
  }

  logout(){
  	this._userService.logout(
  		() => {
  			this._route.navigateByUrl('/');
  		},
  		console.log('unsuccessful')

  	)

  }

}
