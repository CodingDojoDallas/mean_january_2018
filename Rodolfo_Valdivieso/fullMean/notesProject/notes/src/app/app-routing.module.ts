import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { NotesCreateComponent } from './notes/notes-create/notes-create.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: NotesComponent, children:[
		{path: '', pathMatch: 'full', component: NotesCreateComponent}
	]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
