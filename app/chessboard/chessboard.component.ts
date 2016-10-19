import { Component, OnInit } from '@angular/core';

import { Tile, Piece, SelectedPiece } from './model';
import { ChessboardService } from './chessboard.service';
import { ReversePipe } from '../pipes/reverse.pipe';

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
  sourceTile?: Tile;
  flipped: boolean;
  showPosition: boolean;

  constructor(private chessboardService: ChessboardService) { 
    this.flipped = false;
    this.showPosition = false;
  }

  // Select Piece
  onSelectSource(event, tile: Tile): void {
    if (!this.sourceTile) {
      event.stopPropagation();
      this.sourceTile = tile;
      this.sourceTile.selected = true;
    } else if (this.sourceTile === tile) {
      event.stopPropagation();
      tile.selected = false;
      this.sourceTile = null;
    }
  }

  // Select Target to move Piece
  onSelectTarget(tile: Tile): void {
    if (this.sourceTile) {
      tile.piece = this.sourceTile.piece;
      this.sourceTile.piece = null;
      this.sourceTile.selected = false;
      this.sourceTile = null;
    } else {
      console.log('No SOurce Tile');
      console.log(tile);
    }
  }

  flipBoard(): void {
    this.flipped = !this.flipped;
  }
  toggleShowPosition(): void {
    this.showPosition = !this.showPosition;
  }

  // Data Functions
  getTiles(): void {
    this.chessboardService.getTiles().then(tiles => this.tiles = tiles);
  }

  getPieces(): void {
    // this.chessboardService.getPieces().then(pieces => this.pieces = pieces);
  }

  // Init Learn more about Lifecycle Hooks: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngOnInit(): void { 
    this.getTiles();
    this.getPieces();
  }
}

