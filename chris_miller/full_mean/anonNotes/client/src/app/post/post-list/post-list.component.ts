import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
	posts: Post[];

  constructor(private _postService: PostService) { }

  ngOnInit() {
  	// this.posts = this._postService.retrievePosts();

  	this._postService.retrievePosts(
  		(posts) => {
  			this.posts = posts;
  		},
  		(err) => {
  			console.log(err);
  		}
  	)
  }

}
