import { Injectable } from '@angular/core';
import { post } from './post';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL: string = "https://jsonplaceholder.typicode.com/posts";
  posts: post[]=[];
  
  constructor(private http: HttpClient) { }

  geturl() {
    return this.http.get(this.URL);
  }
  getposts(){
    this.geturl().subscribe((data: post[]) => {
      for (let index = 0; index < data.length; index++) {
        const element: post = data[index];
        this.posts.push(new post(element.userId,element.id,element.title,element.body))
    }
    });
  }
 
  
}
