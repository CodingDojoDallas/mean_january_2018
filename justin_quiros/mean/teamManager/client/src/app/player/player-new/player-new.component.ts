import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http'

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css', '../../bootstrap.min.css']
})
export class PlayerNewComponent implements OnInit {

  player = new Player();

  constructor(private _dataService: DataService,
              private _router: Router) { }

  onSubmit(){
  	this._dataService.addPlayer(this.player,
      (player) => {
        this.player = new Player();

        this._router.navigateByUrl('/player/list');

      },
      (err) => {
        console.log(err);
      }); 
  		
  	this.player = new Player();

  }

  ngOnInit() {
  }

}
