import { Component } from '@angular/core';
import { User } from './user';
import { states } from './states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  states = states;
  success: boolean = false;
  currentUser: number = -1;

  onSubmit(){
    this.currentUser++;
    this.success = true;
    this.users.push(this.user);
    this.user = new User();
  }
}
