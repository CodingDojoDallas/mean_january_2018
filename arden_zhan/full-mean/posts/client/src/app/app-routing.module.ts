import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { PostComponent } from './post/post.component';
import { PostNewComponent } from './post/post-new/post-new.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, children: [
    { path: 'new', component: UserNewComponent }
  ]},

  { path: 'dashboard', component: PostComponent, children: [
    { path: '', component: PostNewComponent }
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
