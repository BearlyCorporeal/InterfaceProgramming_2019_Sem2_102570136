import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
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
export class TodoserviceService {
  newtodo="create new todo"
  todos = [new todo("add some todos",new Date(),false)]
  constructor() { }
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
