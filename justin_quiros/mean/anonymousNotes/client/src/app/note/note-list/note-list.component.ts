import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css', '../../bootstrap.min.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	// this.notes = this._dataService.retrieveNotes();

  	this._dataService.retrieveNotes( 
  		(notes) => {
  			this.notes = notes;
  		},
  		(err) => {
  			console.log(err)
  		}
  	)
  }
}