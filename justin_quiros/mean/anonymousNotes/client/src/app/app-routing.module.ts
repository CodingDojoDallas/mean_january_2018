import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NoteNewComponent } from './note/note-new/note-new.component';
import { NoteListComponent } from './note/note-list/note-list.component';


const routes: Routes = [
	{ path: '', pathMatch: 'full', component: NoteComponent, children: [
		{ path: '', pathMatch: 'full',  component: NoteNewComponent },
		{ path: '', pathMatch: 'full',  component: NoteListComponent }
	]}
	]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
