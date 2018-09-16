import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
post: Post;  //interface

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    // private location: Location
  ) { }

  ngOnInit() {
    //get id passed into url 
    const id = +this.route.snapshot.paramMap.get('id');
   //use service to get id and set to single post
   this.postService.getPost(id).subscribe(post => this.post = post);  //interface post property
  }

}
