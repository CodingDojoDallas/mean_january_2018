import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../notes';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'Rxjs';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes = [];
  constructor(private _dataService: NoteService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  	//this.notes = this._dataService.retrieveNotes();
  	this._dataService.retrieveNotes(
  		(notes) => {
  			this.notes = notes;
  		},
  		(err) => {
  			console.log(err);
  		}
  	);
  }

}
