import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
	post: Post;

  constructor(
  	private _postService: PostService,
  	private _router: Router
  	) { }

  ngOnInit() {
  	this.post = new Post();
  }

  onSubmit(){
  		this._postService.createPost(this.post,
  			(post) => {
  				// this.post = new Post();  				
  				this._router.navigateByUrl('/post');
  			},
  			(err) => {
  				console.log("error");
  			}
  		);
  }

}
