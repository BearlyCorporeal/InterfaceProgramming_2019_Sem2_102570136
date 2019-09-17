import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})


export class GameBoardComponent implements OnInit {


  gamestate: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];
  currentletter: string = "X";
  constructor() { }
  OnPieceChosen(x: number, y: number) {
    if (this.currentletter == "O") {
      this.currentletter = "X"
    } else if (this.currentletter == "X") {
      this.currentletter = "O"
    }
    this.gamestate[x][y]=this.currentletter
    console.log(this.gamestate[x][y]);
    
  }
  ngOnInit() {
  }

}
