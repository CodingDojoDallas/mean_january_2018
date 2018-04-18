import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  note: Note;

  constructor(private _noteService: NoteService, private _router: Router) { }

  ngOnInit() {
    this.note = new Note();
  }

  onSubmit() {
    this._noteService.createNote(this.note,
      (note) => { this._router.navigate(['/note']); },
      (err) => { console.log(err); }
    );
  }
}
