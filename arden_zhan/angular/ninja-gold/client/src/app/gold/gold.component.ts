import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  goldCount = {gold: null};

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    this.goldCount = this._goldService.retrieveGold();
  }

}
