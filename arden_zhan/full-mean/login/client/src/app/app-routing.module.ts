import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, children: [
    { path: 'new', component: UserNewComponent }
  ]},

  { path: 'dashboard', component: NoteComponent, children: [
    { path: '', component: NoteListComponent }
  ]},


  { path: '', pathMatch: 'full', component: UserComponent, children: [
    { path: '', pathMatch: 'full', component: UserNewComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
