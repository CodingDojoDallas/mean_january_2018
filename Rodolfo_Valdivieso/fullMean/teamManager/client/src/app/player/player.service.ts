import { Injectable } from '@angular/core';
import { Player } from './player';
import { Http } from '@angular/http';
@Injectable()
export class PlayerService {
  players: any[];
  constructor(private _http: Http) { 
  	this.players = [];

  }
  createPlayer(player, callback, errorback){
  	//console.log(note);
  	this._http.post('players', player).subscribe(
        res => {
          const player = res.json();
          //this.players.push(player);
          //push at beginning unshift
          this.players.unshift(player);
          callback(player);
        },
        err => {
          errorback(err.json());
        }
      );
  }

  deletePlayer(id, callback, errorback){
  	this._http.delete('players/'+id).subscribe(
        res => {
         //this.players = res.json();
         //remove player from array
         this.removePlayer(id);
         callback(this.players);
        },
        err => {
          errorback(err.json());
        }
      );

  }

  updateStatus1(id, player, game, callback, errorback){
    this._http.put('players/'+id+'/game/'+game, player).subscribe(
        res => {
         //this.players = res.json();
         var player = res.json();
         //need to update the arr with the new object.......
         this.updateArr(player);
         callback(this.players);
        },
        err => {
          errorback(err.json());
        }
      );
  }

  updateArr(player){
    for (var i=0; i<this.players.length;i++){
      if(this.players[i]._id == player._id){
        this.players[i] = player;
      }
    }
  }

  removePlayer(id){
  	var newArr = [];
  	for (var i=0; i<this.players.length;i++){
  		if(this.players[i]._id != id){
  			newArr.push(this.players[i]);
  		}
  	}
  	this.players = newArr;
  }

  retrievePlayers(callback, errorback){
  	  this._http.get('players').subscribe(
        res => {
         this.players = res.json();
         callback(this.players);
        },
        err => {
          errorback(err.json());
        }
      );

  }

}
