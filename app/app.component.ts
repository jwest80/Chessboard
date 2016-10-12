import { Component, OnInit } from '@angular/core';

import { Tile } from './tiles';
import { Piece } from './piece';
import { ChessboardService } from './chessboard.service';

@Component({
  //moduleId: module.id,
  selector: 'my-app',
  //template: `HI`,
  templateUrl: './app/app.component.html',
  //styleUrls: [ 'app.component.css' ],
  providers: [ChessboardService],
})

export class AppComponent implements OnInit { 

  // Variables
  tiles: Tile[];
  pieces: Piece[];

  constructor(private chessboardService: ChessboardService) { }

  // Functions
  getTiles(): void {
    this.chessboardService.getTiles().then(tiles => this.tiles = tiles);
  }

  getPieces(): void {
    this.chessboardService.getPieces().then(pieces => this.pieces = pieces);
  }

  // Init Learn more about Lifecycle Hooks: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngOnInit(): void { 
    this.getTiles();
    this.getPieces();
  }
}

