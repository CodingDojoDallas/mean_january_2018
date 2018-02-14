import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
	user: User = new User();

	constructor(private _userService: UserService) { }

	ngOnInit() {
		this.user = new User();

		this.user = this._userService.currentUser;

		console.log(this.user);
	}
}
