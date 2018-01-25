import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../notes';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent implements OnInit {
  note: Note;
  
  constructor(private _dataService: NoteService, private _route: ActivatedRoute, private _router: Router) { 
  }
  ngOnInit() {
  	this.note = new Note();
  }
  onSubmit(){
  	this._dataService.createNote(this.note, 
        (note) => {
          this.note = new Note();
          //navigate to other component if needed
          //this._router.navigateByUrl('/post');

        },
        (err) => {
          console.log(err);
        }
    );
  }

}
