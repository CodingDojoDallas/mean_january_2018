import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './notes/note.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesCreateComponent } from './notes/notes-create/notes-create.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesCreateComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
