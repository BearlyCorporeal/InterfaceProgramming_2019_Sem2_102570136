import { Component, OnInit } from '@angular/core';

class todo {
  title: string;
  compleated: boolean;


  constructor(title: string, compleated: boolean) {
    this.title = title;

    this.compleated = compleated;
  }
}




@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {


  todos = [new todo("ad some todos", false)]
  constructor() { }

  ngOnInit() {
  }

  removetodos(todo) {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  addtodo(todotitle: string, ) {
    this.todos.push(new todo(todotitle, false));
  }

}
