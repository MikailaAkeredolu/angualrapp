  import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
  import { PostService } from '../../services/post.service';
  import { Post } from '../../models/Post';

  @Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
  })
  export class PostFormComponent implements OnInit {
//add properties
 
   //used for event emitter so you can use it in another component like post component
   @Output() newPost: EventEmitter<Post> = new EventEmitter();
   
   //event emiiter for when you edit a post the second time
   @Output() updatedPost: EventEmitter<Post> = new EventEmitter();

    @Input() currentPost: Post;  

    @Input() isEdit:boolean;

    constructor(private postService: PostService) { }

    ngOnInit() {
    }



    //METHODS

      addPost(title, body){
      if(!title || !body){
      alert('Please add post');
        }else{
          this.postService.savePost({title, body} as Post)
          .subscribe( post => {
            //emmit an event so you can use it in the post component
            this.newPost.emit(post);
          });
        }
    }

    updatePost(){
      this.postService.updatePost(this.currentPost)
      .subscribe(post => {
       //change from edit post to add post and back
      this.isEdit = false;
      this.updatedPost.emit(post);
      });
    }
    


  }
