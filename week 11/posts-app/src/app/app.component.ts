import { Component } from '@angular/core';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posts-app';
  constructor(postsservice:PostsService) { }
  
}
