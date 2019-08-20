import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

class todo {
  title: string;
  datestarted: Date;
  compleated:boolean;
  datefinished: Date;


  constructor(title:string, datestarted: Date, compleated:boolean){
    this.title = title;
    this.datestarted = datestarted;
    this.compleated = compleated; 
  }
}





@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  
  todos = [new todo("ad some todos",new Date(),false)]
  constructor() { }

  ngOnInit() {
  }

  ;

   
  
  
  removetodos(todo: todo){
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  
  addtodo(todotitle: string,){
    this.todos.push(new todo(todotitle,new Date(),false));
  }
  completetodo(todo: todo){
    todo.compleated = true;
    todo.datefinished = new Date();
  }

}
