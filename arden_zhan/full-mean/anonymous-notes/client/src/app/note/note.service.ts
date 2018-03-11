import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from './note';

@Injectable()
export class NoteService {
  notes: Note[] = [];

  constructor(private _http: Http) { }

  createNote(note: Note, callback, errorback) {
    this._http.post('/notes', note).subscribe(
      (res) => { 
        const note = res.json();
        this.notes.push(note); 
        callback(note); 
      },
      (err) => { errorback(err.json()); }
    );

    this.notes.push(note);
  }

  retrieveNotes(callback, errorback) {
    this._http.get('/notes').subscribe(
      (res) => {
        this.notes = res.json();
        callback(this.notes);
      },
      (err) => { errorback(err.json()); }
    )
    return this.notes;
  }
}
