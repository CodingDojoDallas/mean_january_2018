import { Component, OnInit } from '@angular/core';
import { Note } from '../note'
import { DataService } from '../data.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css', '../../bootstrap.min.css']
})
export class NoteNewComponent implements OnInit {

  note = new Note();

  constructor(private _dataService: DataService,
              private _router: Router) { }

  onSubmit(){
  	this._dataService.addNote(this.note,
      (note) => {
        this.note = new Note();

        // this._router.navigateByUrl('/note');

      },
      (err) => {
        console.log(err);
      }); 
  		
  	this.note = new Note();

  }

  ngOnInit() {
  }

}
