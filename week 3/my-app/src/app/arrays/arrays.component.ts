import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

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
  addhero(heroname: string,heroage :number){
    this.heros.push(new hero(heroname,heroage));
  }

}
