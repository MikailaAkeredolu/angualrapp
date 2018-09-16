import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Post } from '../models/Post';

//Create Headers for our post request
const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable()
export class PostService {

  //url we are fetching data/ post from
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  //inject the http client as a dependency
  constructor(private http: HttpClient) { }

  //Method

    //Get 
    getPosts(): Observable<Post[]>{  
      return this.http.get<Post[]>(this.postsUrl);
    }

    //Post
    savePost(post: Post): Observable<Post> { 
      return this.http.post<Post>(this.postsUrl, post, httpOptions);
    }

    //Put
    updatePost(post: Post): Observable<Post> {
      const url = `${this.postsUrl}/${post.id}`;
      return this.http.put<Post>(url, post, httpOptions);
    }

    //Delete
    removePost(post: Post | number): Observable<Post>{
      const id = typeof post === 'number' ? post : post.id;
      const url = `${this.postsUrl}/${id}`;
      return this.http.delete<Post>(url,httpOptions);
    }

    getPost(id: number): Observable<Post> {
      const url = `${this.postsUrl}/${id}`;
      return this.http.get<Post>(url);
    }

}
