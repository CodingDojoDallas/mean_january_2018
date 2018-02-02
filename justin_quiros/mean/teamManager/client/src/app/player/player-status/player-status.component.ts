import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Player } from '../player'


@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css', '../../bootstrap.min.css']
})
export class PlayerStatusComponent implements OnInit {

game = {
	number: 0
}


players: Player[];

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { 
	    this._route.paramMap.subscribe( params => {
			this.game.number = parseInt(params.get('id'));

		})
	}


  onSubmit(game, player, color) {
  	let p1 = player
  	let newcolor = []

  	if(color == 1){
  		newcolor = ['green', '', '']
  	} 
  	else if (color == 2){
  		newcolor = ['', 'red', '']
  	}
  	else {
  		newcolor = ['', '', 'yellow']
  	}


  	if(game == 1){
  		p1.game1 = newcolor
  	}
  	else if(game == 2){
  		p1.game2 = newcolor
  	}
  	else{
  		p1.game3 = newcolor
  	}


  	this._dataService.changeStatus(p1,
	  	(players) => {
	  		this.players = players
	  	},
	  	(err) => {

	  	}
  	);
  }


  ngOnInit() {
  	this._dataService.retrievePlayers( 
	(players) => {
		this.players = players;
		console.log(this.players)
	},
	(err) => {
		console.log(err)
		}
  	)
  }
}
