import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'Rxjs';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players = [];
  constructor(private _dataService: PlayerService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
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

  deletePlayer(id, name){

  	if (confirm('Are you sure you want to delete '+name+'?')) {
	    this._dataService.deletePlayer(id,
	  		(players) => {
	  			//console.log(players);
	  			this.players = players;
	  		},
	  		(err) => {
	  			console.log(err);
	  		}
	  	);
	} else {
	    // Do nothing!
	}

  	
  }

}
