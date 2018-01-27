import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
	posts: Post[];

  constructor(private _http: Http) { 
  	this.posts = [];
  }

  createPost(post, callback, errorback){
  	this._http.post('/posts', post).subscribe(
  		(res) => {
  			const post = res.json();
  			this.posts.push(post);

  			callback(post);
  		},
  		(err) => {
  			errorback(err.json());
  		})
  }

  retrievePosts(callback, errorback) 
  {
  	this._http.get('/posts').subscribe(
  		(res) => 
  		{
  			this.posts = res.json();

  			callback(this.posts);
  		},
  		(err) => 
  		{
  			errorback(err.json());
  		}
  		)
  	
  }
}
