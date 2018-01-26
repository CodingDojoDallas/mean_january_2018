import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

@Injectable()
export class DataService {

  // notes = []
  players: Player[] = [];

  constructor(private _http: Http) { }

  addPlayer(player, callback, errorback){
  		this._http.post('/players', player).subscribe(
  			(res) => {
          console.log('im here addplayer res')
  				const player = res.json();

  				this.players.push(player);
  				
  				callback(player)
  			},
  			(err) => {
          console.log('im here addplayer err')

  				errorback(err.json());
  			}

  		);
  }

  changeStatus(player, callback, errorback){
    console.log('im in changestatus')
    this._http.post('/change', player).subscribe(
      (res) => {
      console.log('im in changestatus and just got back from server')

        const player = res.json();
        this.updateArray(player)

        callback(this.players)
      },
      (err) => {
        console.log("there was an err")
        errorback(err.json());
      }
    );
  }

  retrievePlayers(callback, errorback) {
  	this._http.get('/players').subscribe(
  		(res) => {
  			this.players = res.json();

  			callback(this.players)
  		},
  		(err) => {
  			errorback(err.json());
  		})
  }

  updateArray(player){
    for(let i = 0; i < this.players.length; i++){
      if(this.players[i]._id == player._id){
        this.players[i] = player
      }
    }
  }

  destroyPlayer(player, callback, errorback) {
    this._http.delete('/player/'+ player._id).subscribe(
      (res) => {
        this.removePlayer(player._id)
        callback(this.players)
      },
      (err) => {
        errorback(err.json());
      })
  }


  removePlayer(id){
    console.log(this.players, 'remove player func 1')

    var newarr = []
    for(let i = 0; i < this.players.length; i++){
      if(this.players[i]._id != id){
        newarr.push(this.players[i])
        console.log(newarr)
      }
    }
    this.players = newarr
  }

}
