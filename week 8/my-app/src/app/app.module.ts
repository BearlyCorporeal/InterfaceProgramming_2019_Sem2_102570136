import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GamePieceComponent } from './game-piece/game-piece.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GamePieceComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
