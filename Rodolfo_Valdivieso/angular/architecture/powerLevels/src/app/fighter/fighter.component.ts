import { Component, OnInit, Input } from '@angular/core';
import { Fighter } from './fighter';

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.css']
})
export class FighterComponent implements OnInit {
  @Input() fighter: Fighter;
  constructor() { }

  ngOnInit() {
  }

}
