import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { NoteNewComponent } from './note/note-new/note-new.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: NoteComponent, children: [
    { path: '', pathMatch: 'full', component: NoteNewComponent }
  ] },

  { path: 'note', component: NoteComponent, children: [
    { path: '', pathMatch: 'full', component: NoteListComponent },
    { path: 'new', component: NoteNewComponent }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
