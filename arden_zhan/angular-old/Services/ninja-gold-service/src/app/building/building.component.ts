import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  buildings: string[] = ["farm", "cave", "casino", "house"]

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  updateGold(building: string){
    this._dataService.updateGold(building);
  }
}
