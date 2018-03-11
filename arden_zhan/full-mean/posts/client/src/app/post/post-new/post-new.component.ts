import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
  post: Post;
  posts: Post[];

  constructor(private _postService: PostService, private _router: Router) { }

  ngOnInit() {
    this.post = new Post();


    //Should be in list-new component along with posts: Post[]; and html
    this._postService.retrievePosts(
      (posts) => {
        this.posts = posts;
      },
      (err) => { console.log(err); }
    );

  }

  onSubmit() {
    this._postService.createPost(this.post,
      (post) => { 
        this._router.navigate(['/dashboard']);
        console.log('successfully created post'); },
      (err) => { console.log('errors:', err); }
    );
  }

}
