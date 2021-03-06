import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';
import { NgModule } from '@angular/core';


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

  input
  newtodo="create new todo"
  todos = [new todo("add some todos",new Date(),false)]
  constructor() { }

  ngOnInit() {
  }

  ;

   
  
  
  removetodos(todo: todo){
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  
  addtodo(){
    this.todos.push(new todo(this.newtodo,new Date(),false));
  }
  completetodo(todo: todo){
    todo.compleated = true;
    todo.datefinished = new Date();
  }

}
