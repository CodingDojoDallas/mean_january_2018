import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from './note';

@Injectable()
export class DataService {

  // notes = []
  notes: Note[] = [];

  constructor(private _http: Http) { }

  addNote(note, callback, errorback){
  	// this.notes.push(note)
  		this._http.post('/notes', note).subscribe(
  			(res) => {
  				const note = res.json();

  				this.notes.push(note);
  				
  				callback(note)
  			},
  			(err) => {
  				errorback(err.json());
  			}

  		);


  }

  retrieveNotes(callback, errorback) {
  	this._http.get('/notes').subscribe(
  		(res) => {
  			this.notes = res.json();

  			callback(this.notes)
  		},
  		(err) => {
  			errorback(err.json());
  		})
  }
}
