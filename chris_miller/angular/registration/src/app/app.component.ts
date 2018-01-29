import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	user = new User();
	users = [];

	onSubmit(){
		console.log(this.user);
		this.users.push(this.user);
		this.user = new User();
	}
}
