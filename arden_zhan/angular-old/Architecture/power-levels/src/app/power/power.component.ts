import { Component, OnInit } from '@angular/core';
import { User } from './user/user'

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  levels = [];
  users = [];

  constructor() {
    // Create users array
    let titles = ["Human", "Saiyan", "SuperSaiyan", "SuperSaiyanTwo", "SuperSaiyanThree", "SuperSaiyanFour"];
    let multiplier = [1, 10, 90, 150, 250, 500];
    for (let i = 0; i < titles.length; i++){
      this.users.push(new User(titles[i], multiplier[i]));
    }
    
    // Create levels array (1 - 100 level selector)
    for (let i = 1; i <= 100; i++){
      this.levels.push(i);
    }
  }

  ngOnInit() {
  }

}
