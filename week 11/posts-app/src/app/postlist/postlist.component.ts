import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  @Input()
  post: post;
  
  constructor(postsservice:PostsService) { }
  
  ngOnInit() {
  }

}
