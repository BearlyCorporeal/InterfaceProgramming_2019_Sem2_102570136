import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count:number = 55;

  constructor() { }

  ngOnInit() {
    
  }
  onbuttonclick() {
      this.count++;
  }
  onbuttonclick2() {
    this.count--;
}

}
