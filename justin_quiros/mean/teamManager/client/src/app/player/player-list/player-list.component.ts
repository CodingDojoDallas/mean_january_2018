import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css', '../../bootstrap.min.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];

  constructor(private _dataService: DataService) { }

  destroy(player) {
    if (confirm(`Are you sure you would like to delete ${player.name}?`)){
      this._dataService.destroyPlayer(player,
        (players) => {
          console.log('back from dataserv', players)
          this.players = players
          console.log(this.players)
        },
        (err) => {

        });
    }
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