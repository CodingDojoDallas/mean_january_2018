import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  player;
  constructor(private _dataService: PlayerService, private _route: ActivatedRoute, private _router: Router) {
  	//this.player = new Player();
  }

  ngOnInit() {
  	this.player = new Player();
  }

  onSubmit(){
  	this._dataService.createPlayer(this.player, 
        (player) => {
          this.player = new Player();
          //navigate to other component if needed
          this._router.navigateByUrl('/player/list');

        },
        (err) => {
          console.log(err);
        }
    );
  }
  
}
