import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

class todo {
  title: string;
  datestarted: Date;
  compleated:boolean;


  constructor(title:string, datestarted: Date, compleated:boolean){
    this.title = title;
    this.datestarted = datestarted;
    this.compleated = compleated; 
  }
}

class hero {
  name: string;
  age: number;

  constructor(name:string,age: number){
    this.name = name
    this.age = age
  }
}



@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  names = ["person1","person2","person3"];
  heros = [new hero("hero1",785),new hero("hero2",784)]
  todos = [new todo("ad some todos",time.year.date.now,false)]
  constructor() { }

  ngOnInit() {
  }

  addname(name: string){
    this.names.push(name)

  }
  removenames(name){
    var index = this.names.indexOf(name);
    this.names.splice(index, 1);

    //this.names = this.names filter(x=> x !=name)
  }
  removeheros(hero){
    var index = this.heros.indexOf(hero);
    this.heros.splice(index, 1);
  }
  removetodos(hero){
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addhero(heroname: string,heroage :number){
    this.heros.push(new hero(heroname,heroage));
  }
  addtodo(todotitle: string,){
    this.todos.push(new todos(todotitle,time.now,false));
  }

}
