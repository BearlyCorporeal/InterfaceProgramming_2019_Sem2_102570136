import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-game-piece',
  templateUrl: './game-piece.component.html',
  styleUrls: ['./game-piece.component.css']
})
export class GamePieceComponent implements OnInit {
  @Input() player: string = "5";

  @Output() piecechosen = new EventEmitter<void>();
  picked() {
    this.piecechosen.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
