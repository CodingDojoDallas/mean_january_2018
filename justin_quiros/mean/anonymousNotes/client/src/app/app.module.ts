import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteNewComponent } from './note/note-new/note-new.component';
import { NoteListComponent } from './note/note-list/note-list.component';

import { DataService } from './note/data.service'

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteNewComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
