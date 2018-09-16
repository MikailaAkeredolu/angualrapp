import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
//import PostService
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
//Properties
posts: Post[];   // - /models/Post
currentPost: Post = {
  id: 0,
  title: '',
  body: ''
}

isEdit: boolean = false;

//inject PostService
  constructor(private postService: PostService) { }

  ngOnInit() {
    //fetch post once initialized using post service by subscribing to observable form service
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post){
    this.posts.unshift(post);   //add new post coming from eventEmitter
    console.log(post);
  }

  editPost(post: Post){
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post){
    //loop through the post , grab the current post and index, check if post.id is the curr.id then splice it out from index and take out 1
    this.posts.forEach((cur, index) => {
      if(post.id === cur.id){
        this.posts.splice(index, 1);
        //move updated post to the top and set edit to false
        this.posts.unshift(post);
        this.isEdit = false;
        //clear form
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    });
  }

  removePost(post: Post){
    if(confirm('Are you sure')){
      this.postService.removePost(post.id).subscribe(() =>{
        this.posts.forEach((cur, index) => {
          if(post.id === cur.id){
            this.posts.splice(index, 1);
          }
        });
      });

    }
  }

}
