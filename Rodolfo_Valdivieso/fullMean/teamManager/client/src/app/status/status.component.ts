import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from './../player/player';
import { PlayerService } from './../player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  game;
  players = [];
  constructor(private _dataService: PlayerService, private _route: ActivatedRoute, private _router: Router) {
    this.game = 0;

    this._route.paramMap.subscribe( params => {
       	this.game = params.get('id');
       	this.getPlayers(this.game);
   	})

   	
  }
  getPlayers(game){
  	this._dataService.retrievePlayers(
  		(players) => {
  			//console.log(players);
  			this.players = players;
  		},
  		(err) => {
  			console.log(err);
  		}
  	);
  }

  ngOnInit() {
  }

  updateStatus1(id, player, status, game){
    console.log(game);
    let p1 = player;
    if(game==1){
      p1.status1 = status;
    }
    else if(game==2){
      p1.status2 = status;
    }
    else {
      p1.status3 = status;
    }
    
    this._dataService.updateStatus1(id, p1, game,
      (players) => {
        //console.log(players);
        this.players = players;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
