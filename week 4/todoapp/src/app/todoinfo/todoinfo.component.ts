import { Component, OnInit, Input } from '@angular/core';
import { todo } from '../todo'

@Component({
  selector: 'app-todoinfo',
  templateUrl: './todoinfo.component.html',
  styleUrls: ['./todoinfo.component.css']
})
export class TodoinfoComponent implements OnInit {

  @Input() item: todo;
  constructor() { }

  ngOnInit() {
  }

}
