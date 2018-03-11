import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user: User;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.user = new User();
    if (this._userService.currentUser) { this._router.navigate(['/dashboard']); }

  }

  onSubmit() {
    this._userService.createUser(this.user, 
      (user) => { this._router.navigate(['/dashboard']); },
      (err) => { console.log(err); }
    );

    this.user = new User();
  }

}
