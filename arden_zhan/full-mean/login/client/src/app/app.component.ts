import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _userService: UserService, private _router: Router){

  }
  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        if (!user) { return this._router.navigate(['/']); }
        return this._router.navigate(['/dashboard']);

      },
      (err) => { console.log(err); }
    );
  }
}
