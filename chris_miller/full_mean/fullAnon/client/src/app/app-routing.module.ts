import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostNewComponent } from './post/post-new/post-new.component';

const routes: Routes = [
	{ path: 'post', component: PostComponent, children: [
		// localhost: 8000/post
		{ path: '', pathMatch: 'full', component: PostListComponent},
		// localhost: 8000/post/new
		{ path: 'new', component: PostNewComponent }
	]},

	{ path: '', pathMatch: 'full', component: PostComponent, children: [
		{ path: '', pathMatch: 'full', component: PostNewComponent }
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
