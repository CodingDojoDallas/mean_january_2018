import { Component, OnInit } from '@angular/core';
import { Building } from './building';
import { BUILDINGS } from './default-buildings';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  buildings = BUILDINGS;

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    
  }

  updateGold(building: Building){
    this._goldService.updateGold(building);
  }
}
