import { Component, OnInit } from '@angular/core';

import { Tile, Piece } from './model';
import { ChessboardService } from './chessboard.service';

@Component({
  moduleId: module.id,      // Allow us to use relative paths.  http://stackoverflow.com/questions/37178192/angular2-what-is-the-meanings-of-module-id-in-component
  selector: 'chessboard',
  //template: `HI`,
  templateUrl: 'chessboard.component.html',
  //styleUrls: [ 'chessboard.component.css' ], 
  providers: [ChessboardService],
})

export class ChessboardComponent implements OnInit { 

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

