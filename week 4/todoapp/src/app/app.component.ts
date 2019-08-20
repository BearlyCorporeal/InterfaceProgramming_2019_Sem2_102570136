import { Component, Input } from '@angular/core';
import {todo } from './todo'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos = [new todo("add some todos",true)
  ,new todo("figure out angular",false)
  ,new todo("think of a fourth task",true)
  ,new todo("go home",false)]
  
}
