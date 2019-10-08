import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})


export class GameBoardComponent implements OnInit {
  
  gamestate: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];
  winningletter: string = '';
  player1:string = "X";
  player2:string = "O";
  player1wins: number = 0;
  player2wins: number = 0;
  numofturns: number =0;
  gamecount:number =0;
  currentletter: string = this.player1;
  numofgames= 0;
  constructor() { }
  OnPieceChosen(x: number, y: number) {
    this.gamestate[x][y]=this.currentletter
    this.numofturns = this.numofturns + 1;
    if (this.gamecount <= this.numofgames)
    if (this.gamestate[0][0] == this.player1 && this.gamestate[0][1] == this.player1 && this.gamestate[0][2] == this.player1){
      this.winningletter = this.player1
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player2;
      this.player1wins = this.player1wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[1][0] == this.player1 && this.gamestate[1][1] == this.player1 && this.gamestate[1][2] == this.player1){
      this.winningletter = this.player1
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player2;
      this.player1wins = this.player1wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[2][0] == this.player1 && this.gamestate[2][1] == this.player1 && this.gamestate[2][2] == this.player1){
      this.winningletter = this.player1
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player2;
      this.player1wins = this.player1wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][0] == this.player1 && this.gamestate[1][1] == this.player1 && this.gamestate[2][2] == this.player1){
      this.winningletter = this.player1
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player2;
      this.player1wins = this.player1wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][2] == this.player1 && this.gamestate[1][1] == this.player1 && this.gamestate[2][0] == this.player1){
      this.winningletter = this.player1
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player2;
      this.player1wins = this.player1wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][0] == this.player1 && this.gamestate[1][0] == this.player1 && this.gamestate[2][0] == this.player1){
      this.winningletter = this.player1
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player2;
      this.player1wins = this.player1wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][1] == this.player1 && this.gamestate[1][1] == this.player1 && this.gamestate[2][1] == this.player1){
      this.winningletter = this.player1
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player2;
      this.player1wins = this.player1wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][2] == this.player1 && this.gamestate[1][2] == this.player1 && this.gamestate[2][2] == this.player1){
      this.winningletter = this.player1
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player2;
      this.player1wins = this.player1wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }


    if (this.gamestate[0][0] == this.player2 && this.gamestate[0][1] == this.player2 && this.gamestate[0][2] == this.player2){
      this.winningletter = this.player2
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.player2wins = this.player2wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[1][0] == this.player2 && this.gamestate[1][1] == this.player2 && this.gamestate[1][2] == this.player2){
      this.winningletter = this.player2
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.player2wins = this.player2wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[2][0] == this.player2 && this.gamestate[2][1] == this.player2 && this.gamestate[2][2] == this.player2){
      this.winningletter = this.player2
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.player2wins = this.player2wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][0] == this.player2 && this.gamestate[1][1] == this.player2 && this.gamestate[2][2] == this.player2){
      this.winningletter = this.player2
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.player2wins = this.player2wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][2] == this.player2 && this.gamestate[1][1] == this.player2 && this.gamestate[2][0] == this.player2){
      this.winningletter = this.player2
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.player2wins = this.player2wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][0] == this.player2 && this.gamestate[1][0] == this.player2 && this.gamestate[2][0] == this.player2){
      this.winningletter = this.player2
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.player2wins = this.player2wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][1] == this.player2 && this.gamestate[1][1] == this.player2 && this.gamestate[2][1] == this.player2){
      this.winningletter = this.player2
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.player2wins = this.player2wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.gamestate[0][2] == this.player2 && this.gamestate[1][2] == this.player2 && this.gamestate[2][2] == this.player2){
      this.winningletter = this.player2
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.player2wins = this.player2wins +1;
      this.gamecount = this.gamecount +1;
      this.numofturns = 0;
    }
    if (this.numofturns == 900){
      this.gamestate[0][0]="";
      this.gamestate[0][1]="";
      this.gamestate[0][2]="";
      this.gamestate[1][0]="";
      this.gamestate[1][1]="";
      this.gamestate[1][2]="";
      this.gamestate[2][0]="";
      this.gamestate[2][1]="";
      this.gamestate[2][2]="";
      this.currentletter = this.player1;
      this.numofturns=0;
    }
    if (this.currentletter == this.player2) {
      this.currentletter = this.player1
    } else if (this.currentletter == this.player1) {
      this.currentletter = this.player2
    }
    console.log(this.numofturns)
  }
  ngOnInit() {
  }

}
