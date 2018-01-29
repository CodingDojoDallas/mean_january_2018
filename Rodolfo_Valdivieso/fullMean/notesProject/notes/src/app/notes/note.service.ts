import { Injectable } from '@angular/core';
import { Note } from './notes';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {
  notes: Note[];
  constructor(private _http: Http) {
  	this.notes = [];
   }


  createNote(note, callback, errorback){
  	//console.log(note);
  	
  	this._http.post('notes', note).subscribe(
        res => {
          const note = res.json();
          //this.notes.push(note);
          //push at beginning unshift
          this.notes.unshift(note);
          callback(note);
        },
        err => {
          errorback(err.json());
        }
      );
  }

  retrieveNotes(callback, errorback){
  	  this._http.get('notes').subscribe(
        res => {
         this.notes = res.json();
         callback(this.notes);
        },
        err => {
          errorback(err.json());
        }
      );

  }

}
