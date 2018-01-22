import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'bootstrap.min.css']
})
export class AppComponent {
  title = 'Registration Form';

  password_valid(){
  	if(this.user.password != this.user.password_confirmation){
  		return true;
  	}
  	return false;
  }


  submitted: boolean = false;
  user = new User();
  users = []
  onSubmit() {
  	this.users.push(this.user);
  	this.user = new User();
  	console.log(this.users)

  	this.submitted = !this.submitted;
  }
}
